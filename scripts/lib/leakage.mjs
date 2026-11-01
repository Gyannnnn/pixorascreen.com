// Detects untranslated English inside text that should be in another language.
// Used by scripts/i18n-audit.mjs on indexable non-English pages.
//
// leakIn(text, locale) returns false when the text looks translated, or a short reason string.

// English function words that are not words in Spanish, Portuguese, French, or German.
// Left out on purpose: a, an, in, on, or, so, all, also, was, will, has, for, but, can, us, most
// (each is a word in at least one of those languages).
const EN_FUNCTION_WORDS = new Set([
  'the', 'and', 'with', 'your', 'you', 'this', 'that', 'from', 'are', 'is', 'of', 'to', 'it', 'be',
  'not', 'when', 'what', 'which', 'how', 'have', 'these', 'those', 'they', 'their', 'there', 'been',
  'would', 'should', 'could', 'while', 'into', 'only', 'just', 'than', 'then', 'about', 'after',
  'before', 'because', 'more', 'any', 'each', 'every', 'here', 'its', 'our', 'we', 'my',
]);

// Words that stay in Latin script in every language: brands, products, people, key caps, units,
// and technical terms (see GLOSSARY.md "Never translate"). Compared lowercase.
const KEEP = new Set([
  'pixorascreen', 'pixora', 'gyanranjan', 'patra',
  'windows', 'xp', 'vista', 'macos', 'mac', 'macbook', 'imac', 'iphone', 'ipad', 'ios', 'ipados',
  'android', 'ubuntu', 'linux', 'gnome', 'chrome', 'chromebook', 'chromeos', 'safari', 'firefox',
  'edge', 'opera', 'brave', 'google', 'adsense', 'analytics', 'youtube', 'zoom', 'teams', 'meet',
  'facetime', 'skype', 'discord', 'slack', 'twitch', 'obs', 'netflix', 'microsoft', 'apple',
  'samsung', 'lg', 'sony', 'dell', 'hp', 'lenovo', 'asus', 'acer', 'defender', 'smartscreen',
  'gatekeeper', 'cloudflare', 'resend', 'gmail', 'wannacry', 'dvd', 'stopcode', 'sequoia', 'bridgeos', 'tiktok',
  'facebook', 'whatsapp', 'telegram', 'reddit', 'linkedin', 'pinterest', 'twitter', 'instagram', 'x',
  'esc', 'ctrl', 'shift', 'alt', 'cmd', 'option', 'space', 'enter', 'tab', 'fn', 'backspace',
  'lofi', 'lo-fi', 'wi-fi', 'wifi', 'bluetooth', 'hdmi', 'usb', 'html', 'css', 'javascript', 'json',
  'webgl', 'svg', 'png', 'jpeg', 'jpg', 'gif', 'mp3', 'mp4', 'pwa', 'hz', 'fps', 'px', 'nits', 'ppi',
  'dpi', 'rgb', 'hex', 'hsl', 'oled', 'amoled', 'lcd', 'led', 'ips', 'va', 'tn', 'crt', 'hdr', 'sdr',
  'srgb', 'uefi', 'bios', 'cpu', 'gpu', 'ram', 'ssd', 'pc', 'tv', 'os', 'ok', 'id', 'url', 'faq',
  'ai', 'ui', 'api', 'utc', 'am', 'pm', 'inc', 'ltd', 'www', 'com',
]);

// URLs, e-mail addresses, bare domains (aboutads.info/choices), file names (explorer.exe), hex colors, {params},
// and code identifiers such as Windows stop codes (CRITICAL_PROCESS_DIED).
const URLISH = /https?:\/\/\S+|www\.\S+|\S+@\S+\.\S+|\b[\w-]+(?:\.[\w-]+)*\.[a-z]{2,6}\b(?:\/\S*)?|#[0-9a-fA-F]{3,8}\b|\{[a-z_]+\}|\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\b/g;
const NATIVE = { hi: /[ऀ-ॿ]/, ja: /[぀-ヿ㐀-鿿＀-￯]/ };
const LATIN_SEQUENCE = /[A-Za-z0-9][A-Za-z0-9'’.-]*(?:[ \t,/&+–—-]+[A-Za-z0-9][A-Za-z0-9'’.-]*)*/g;

const isKept = (word) => {
  const bare = word.replace(/^[.'’-]+|[.'’-]+$/g, '');
  if (!bare || /\d/.test(bare) || bare.length === 1) return true; // numbers, F11, 4K, 1080p; key caps and compass points (F, N, W)
  if (KEEP.has(bare.toLowerCase())) return true;
  return /^[A-Z]{2,6}s?$/.test(bare); // acronyms: BSOD, FPS, HEX
};

export function leakIn(text, locale) {
  const clean = text.replace(URLISH, ' ');
  if (['es', 'pt', 'fr', 'de'].includes(locale)) {
    const hits = (clean.toLowerCase().match(/[\p{L}'’]+/gu) ?? []).filter((word) => EN_FUNCTION_WORDS.has(word));
    return hits.length >= 2 ? `English words: ${[...new Set(hits)].join(', ')}` : false;
  }
  if (locale === 'hi' || locale === 'ja') {
    const native = NATIVE[locale].test(clean);
    let foreign = 0;
    for (const sequence of clean.match(LATIN_SEQUENCE) ?? []) {
      let streak = 0;
      for (const word of sequence.split(/[ \t,/&+–—-]+/).filter(Boolean)) {
        if (isKept(word)) {
          streak = 0;
          continue;
        }
        foreign++;
        streak++;
        if (streak >= 3) return 'three or more English words in a row';
      }
    }
    if (!native && foreign >= 2) return 'no translated text, only English words';
    if (!native && foreign === 1 && /[A-Za-z]{3}/.test(clean) && clean.trim().split(/\s+/).length === 1) return 'untranslated single word';
    return false;
  }
  return false;
}

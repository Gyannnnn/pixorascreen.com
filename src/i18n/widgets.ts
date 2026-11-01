// Which UI string namespaces each tool's interactive widget uses (see indexing.ts):
// - A tool page is complete in a locale only when its widget namespaces are translated.
// - A widget namespace whose text also shows inside the tool-card previews (home page,
//   related tools, 404) counts as shared chrome, because those cards appear on other pages.
import { tools } from '../data/tools';

const byTool: Record<string, string[]> = {
  'dead-pixel-test': ['deadpixel'],
  'oled-burn-in-test': ['oled'],
  'fake-video-call': ['videocall'],
  'countdown-timer': ['countdown'],
  'dvd-screensaver': ['dvd'],
  'clock-screen': ['clock'],
  'stars-screen': ['stars'],
  'galaxy-screen': ['galaxy'],
  'matrix-screen': ['matrix'],
  'rain-screen': ['rain'],
  'snow-screen': ['snow'],
  'aquarium-screen': ['aquarium'],
  'ambient-screen': ['ambient'],
  'fireplace-screen': ['fireplace'],
  'white-noise-screen': ['whitenoise'],
  'radar-screen': ['radar'],
  'windows-update': ['winupdate'],
  'macos-screen': ['macupdate'],
  'ubuntu-screen': ['ubuntu'],
  'android-update': ['android'],
  'fake-virus-screen': ['fakevirus'],
  'hacker-typer': ['hackertyper'],
  'windows-xp-crash': ['xpcrash'],
  'blue-screen-prank': ['bsod'],
  'broken-screen': ['broken'],
};
for (const tool of tools) {
  // The 16 color tools render ScreenTool, whose labels live in the "screen" namespace.
  if (tool.kind === 'color') byTool[tool.id] = ['screen'];
}

/**
 * Widget namespaces whose strings are rendered by card previews too. The React islands only
 * receive strings on their tool page (cards pass none), except CountdownTimer, whose card shows
 * its mode label. The .astro widgets render their full markup inside cards.
 */
const cardVisible = new Set(['countdown', 'videocall', 'fireplace', 'whitenoise', 'radar', 'winupdate', 'macupdate', 'ubuntu', 'android']);

export function widgetNamespaces(toolId: string): string[] {
  return byTool[toolId] ?? [];
}

/** Widget namespaces that only ever appear on their own tool page. */
export const toolPageOnlyNamespaces = new Set(Object.values(byTool).flat().filter((namespace) => !cardVisible.has(namespace)));

/** Namespaces used by a single page that is not a tool page. */
export const pageOnlyNamespaces = new Set(['contact', 'not_found', 'server_error']);

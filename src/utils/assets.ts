// Helper to dynamically discover background images and BGM files for any tool using Vite import.meta.glob
export function getToolAssets(toolSlug: string) {
  const allAssets = import.meta.glob('/public/assets/**/*', { query: '?url', import: 'default', eager: true }) as Record<string, string>;

  const backgrounds: string[] = [];
  const audioFiles: string[] = [];

  const bgSubstr = `/assets/${toolSlug}/backgrounds/`;
  const bgmSubstr = `/assets/${toolSlug}/bgm/`;

  const validImgExts = ['png', 'jpg', 'jpeg', 'webp', 'svg', 'gif', 'avif'];
  const validAudioExts = ['mp3', 'ogg', 'wav', 'm4a', 'aac', 'flac'];

  for (const pathKey of Object.keys(allAssets)) {
    if (pathKey.includes(bgSubstr)) {
      const ext = pathKey.split('.').pop()?.toLowerCase() || '';
      if (validImgExts.includes(ext)) {
        const publicPath = pathKey.replace(/^\/public/, '');
        if (!backgrounds.includes(publicPath)) {
          backgrounds.push(publicPath);
        }
      }
    } else if (pathKey.includes(bgmSubstr)) {
      const ext = pathKey.split('.').pop()?.toLowerCase() || '';
      if (validAudioExts.includes(ext)) {
        const publicPath = pathKey.replace(/^\/public/, '');
        if (!audioFiles.includes(publicPath)) {
          audioFiles.push(publicPath);
        }
      }
    }
  }

  // Sort numerically and alphabetically
  backgrounds.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  audioFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  return { backgrounds, audioFiles };
}

/**
 * Resolves an asset path to the correct URL considering Vite base path
 * (e.g. '/jaikisaan/' on GitHub Pages or '/' on custom domain / local dev).
 */
export function asset(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

export default asset;


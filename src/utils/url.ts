/** Prefix a root-relative path with the configured base (needed for GitHub Pages sub-paths). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string = "/"): string {
  if (!path || path === "/") return BASE || "/";
  if (path.startsWith("#") || path.startsWith("/#")) {
    return `${BASE}/${path.replace(/^\//, "")}`;
  }
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}/${path.replace(/^\//, "")}`;
}

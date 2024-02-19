export function isPropertyNull(obj: Record<string, Object | null>): boolean {
  for (const key in obj) {
    if (obj[key] !== null) {
      return false;
    }
  }
  return true;
}

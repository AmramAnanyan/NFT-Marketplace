export function areAllValuesNull(obj: Record<string, Object | null>) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] !== null) {
        return false
      }
    }
  }
  return true
}

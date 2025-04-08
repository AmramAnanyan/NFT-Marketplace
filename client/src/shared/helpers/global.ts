export function isPropertyNull(obj: Record<string, Object | null>): boolean {
  for (const key in obj) {
    if (obj[key] !== null) {
      return false;
    }
  }
  return true;
}

export const decodeJWT = (
  token: string
): { header: Record<string, string>; payload: Record<string, string> } => {
  const [header, payload] = token.split('.').slice(0, 2);
  return {
    header: decodeBase64(header),
    payload: decodeBase64(payload)
  };
};

export const decodeBase64 = (str: string) => {
  return JSON.parse(atob(str.replace(/-/g, '+').replace(/_/g, '/')));
};

export const isTokenExpired = (token: string) => {
  const { payload } = decodeJWT(token);
  return new Date(Number(payload.exp) * 1000) < new Date();
};

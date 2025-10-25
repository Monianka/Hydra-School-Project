export const API = process.env.NEXT_PUBLIC_API_URL!;
export async function getJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, { ...init, next: { revalidate: 60 } });
  return res.json() as Promise<T>;
}

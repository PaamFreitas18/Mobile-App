export const API_BASE = 'http://10.0.2.2:3000'; // Android emulator -> host machine
export const DEV_HEADERS = { 'x-dev-token': 'dev-token', 'Content-Type': 'application/json' };
export async function fetchJSON(path, opts) {
  const res = await fetch(API_BASE + path, opts);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

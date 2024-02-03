import { fetch } from "./index";
export function chatText(data: Record<string, string>): Promise<any> {
  return fetch({ path: "/answer", data });
}

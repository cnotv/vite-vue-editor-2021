import { DataText } from "./data-text.interface";

export interface UpdatePayload {
  value: string;
  i: number;
  target: keyof DataText
}

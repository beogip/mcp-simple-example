import { Result } from "../types";

export interface ViewRenderer {
  render(result: Result): string
}
import { Result } from "../types";
import { ViewRenderer } from "./ViewRenderer";

export class UnknownView implements ViewRenderer{
  render(result: Result): string {
    return result.success 
      ? "Action completed successfully, but no view is defined to display the result"
      : `Error: ${result.error}`
  }
}
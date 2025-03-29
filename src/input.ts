import { Input } from "./types";

export class InputProcessor {
  sanitize(rawInput: any): Input {
    return {
      userId: String(rawInput.userId).trim(),
      message: String(rawInput.message).trim(),
    };
  }
}
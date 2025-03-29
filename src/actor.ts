import { ActionType, Input } from "./types";

export class Actor {
  decide(input: Input): ActionType {
    const taskRegex = /tareas?/i;

    if (taskRegex.test(input.message)) {
      return "get_tasks";
    }

    return "unknown";
  }
}
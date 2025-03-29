import { State } from "./types";

export class PolicyEngine {
  policy = {
    "user": ["get_tasks"],
    "admin": ["get_tasks", "remove_task", "add_task"],
  }

  process(state: State, accion: string): boolean {
    if(!state) {
      return false;
    }
    if (!this.policy[state.role]?.includes(accion)) {
      return false;
    }

    if(accion === "get_tasks" && state.focusMode) {
      return false;
    }

    return true;
  }
}
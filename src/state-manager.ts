import { State } from "./types";

export class StateManager{
  getState(userId: string): State {
    return {
      userId,
      role: "user",
      tasks: [
        {
          title: "Task 1",
          due: "2023-10-01",
          completed: false,
        },
        {
          title: "Task 2",
          due: "2023-10-02",
          completed: true,
        },
      ],
      focusMode: false
    };
  }
}
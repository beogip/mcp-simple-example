export interface Input {
  userId: string;
  message: string;
}

export type Task = {
  title: string;
  due: string;
  completed: boolean;
}

export interface State {
  userId: string;
  role: "user" | "admin";
  tasks: Task[];
  focusMode: boolean;
}

export const actionTypes = [
  "get_tasks",
  "add_task",
  "remove_task",
  "update_task",
  "unknown"
] as const;

export type ActionType = typeof actionTypes[number];
export type ViewType = "summary" | "detailed";

export interface Result {
  success: boolean;
  data?: any;
  error?: string;
}
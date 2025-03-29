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

export type ActionType = "get_tasks" | "unknown";
export type ViewType = "summary" | "detailed";

export interface Result {
  success: boolean;
  data?: any;
  error?: string;
}
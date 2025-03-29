import { Result, Task } from "../types";
import { BaseActionHandler } from "./BaseActionHandler";

export class GetTasksAction extends BaseActionHandler{
  run(): Result{
    const tasks = this.state.tasks.filter((task: Task) => !task.completed)
    
    return {
      success: true,
      data: tasks
    }
  }
}
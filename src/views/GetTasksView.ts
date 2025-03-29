import { Result, Task } from "../types";
import { ViewRenderer } from "./ViewRenderer";

export class GetTasksView implements ViewRenderer{
  render(result: Result): string {
    if(!result.success){
      return `Error: ${result.error}`
    }
    const tasks = result.data as Task[]
    if(tasks.length === 0){
      return "You don't have pending tasks"
    }

    const titles = tasks.map(t => t.title).join(" ")
    return `You have ${tasks.length} task(s): ${titles}`
  }
}
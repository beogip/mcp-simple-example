export const mockLLM = {
  async call(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(prompt.includes("list tasks") || prompt.includes("list task")){
          resolve("get_tasks");
        }else if(prompt.includes("add task") || prompt.includes("add tasks")){
          resolve("add_task");
        }else if(prompt.includes("remove task") || prompt.includes("remove tasks")){
          resolve("remove_task");
        }else if(prompt.includes("update task") || prompt.includes("update tasks")){
          resolve("update_task");
        }else {
          resolve("unknown");
        }
      }, 1000);
    });
  }
}
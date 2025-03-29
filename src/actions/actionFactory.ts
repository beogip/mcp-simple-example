import { ActionType, State } from "../types";
import { BaseActionHandler } from "./BaseActionHandler";
import { GetTasksAction } from "./GetTasks.action";
import { UnknownAction } from "./UnknownAction";

export function actionFactory(action: ActionType, state: State): BaseActionHandler{
  switch(action){
    case "get_tasks":
      return new GetTasksAction(state)
    default:
      return new UnknownAction(state)
  }
}
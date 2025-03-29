import { ActionType } from "../types";
import { GetTasksView } from "./GetTasksView";
import { UnknownView } from "./UnknownView";
import { ViewRenderer } from "./ViewRenderer";

export function viewFactory(action: ActionType): ViewRenderer{
  switch(action){
    case "get_tasks":
      return new GetTasksView()
    default:
      return new UnknownView()
  }
}
import { Result } from "../types";
import { BaseActionHandler } from "./BaseActionHandler";

export class UnknownAction extends BaseActionHandler{
  run(): Result{
    return {
      success: false,
      error: "Unknown action"
    }
  }
}
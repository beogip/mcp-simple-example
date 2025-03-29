import { Result, State } from "../types";

export abstract class BaseActionHandler {
  constructor(protected state: State) {}
  abstract run(): Result
}
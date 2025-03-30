import { ActionType, actionTypes, Input } from "../../types";

export class LLMActor {

  constructor(private model: {call: (prompt: string) => Promise<string>}) {}

  async decide(input: Input): Promise<ActionType> {
    const prompt = this.generatePrompt(input.message);
    const output = await this.callModel(prompt);
    return this.sanitizeOutput(output);
  }

  private generatePrompt(input: string): string {
    return `You are an actor in an MCP system.
Your task is to analyze the user’s message and return ONLY one valid ActionType.
Any other kind of response will be considered invalid.
If you are unable to identify the action, return "unknown" as the action type.
    ActionTypes: 
    User's message: "${input}"
    `
  }

  async callModel(prompt: string): Promise<string> {
    const response = await this.model.call(prompt);
    return response.trim();
  }

  sanitizeOutput(output: string): ActionType {
    if(actionTypes.includes(output as ActionType)) {
      return output as ActionType;
    }
    return "unknown";
  }
}

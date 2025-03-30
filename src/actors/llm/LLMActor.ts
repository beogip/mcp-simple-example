import { ActionType, actionTypes, Input } from "../../types";

export class LLMActor {

  constructor(private model: {call: (prompt: string) => Promise<string>}) {}

  async decide(input: Input): Promise<ActionType> {
    const prompt = this.generatePrompt(input.message);
    const output = await this.callModel(prompt);
    return this.sanitizeOutput(output);
  }

  private generatePrompt(input: string): string {
    return `Sos un actor en una MCP, tu tarea es analizar el mensaje del usuario y devolver SOLAMENTE, un action tipe valido. Cualquier otra respuesta se considerara erronea. Si no logras identificar la task devolve como action type "unknown"
    ActionTypes: 
    El mensaje del usuario es: "${input}"
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
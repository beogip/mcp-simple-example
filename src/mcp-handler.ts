import { Input } from "./types";
import { InputProcessor } from "./input";
import { Actor } from "./actor";
import { StateManager } from "./state-manager";
import { PolicyEngine } from "./policy-engine";
import { actionFactory } from "./actions/actionFactory";
import { viewFactory } from "./views/viewFactory";

export async function handleMCPRequest(body: any) {
  const processor = new InputProcessor();
  const input: Input = processor.sanitize(body);

  const actor = new Actor();
  const actionType = actor.decide(input);

  const stateManager = new StateManager();
  const state = stateManager.getState(input.userId);

  const policyEngine = new PolicyEngine();
  const isAllowed = policyEngine.process(state, actionType);

  if (!isAllowed) {
    return {
      status: 403,
      body: { error: "Action not allowed." }
    };
  }

  const action = actionFactory(actionType, state);
  const result = action.run();

  const view = viewFactory(actionType);
  const output = view.render(result);

  return {
    status: 200,
    body: { output, actionType, result }
  };
}
import { LLMActor } from "../actors/llm/LLMActor";
import { mockLLM } from "../actors/llm/mockLLM";

async function main(){
  let passed = 0;
  const testCases = [
    { input: "list tasks", expected: "get_tasks" },
    { input: "add task", expected: "add_task" },
    { input: "remove task", expected: "remove_task" },
    { input: "update task", expected: "update_task" },
    { input: "unknown task", expected: "unknown" },
  ];

  for (const testCase of testCases) {
    await testLLMActor(testCase.input, testCase.expected);
  }
  console.log(`\nPasaron ${passed}/${testCases.length} tests`);
}

async function testLLMActor(input: string, expected: string) {
  const actor = new LLMActor(mockLLM);
  const result = await actor.decide({userId: "user123", message: input});
  if(result === expected) {
    console.log(`Success: ${input} -> ${result}`);
    passed++;
  } else {
    console.error(`Error: Expected ${expected} but got ${result}`);
  }
}

main()

# ✍️ Module 2 – Prompt Engineering for MCP

## 🎯 Goal

Design and evaluate prompts for LLMs that are used within an MCP (Model Context Protocol) system, ensuring outputs are predictable, structured, and validatable.

---

## 📚 Topics covered

### ✅ What makes a prompt “safe” for backend systems:

- Clearly defines the model's role (e.g., "You are an MCP Actor")
- Restricts output to a known set of valid responses
- Explicitly forbids extra explanations or decorated text
- Includes fallback logic (e.g., return `"unknown"`)
- Provides clear input context (the user's message)

---

### 🔍 Exercises completed

- Compared multiple prompts for the same task
- Identified flaws in ambiguous or permissive instructions
- Refactored a prompt to make it robust and production-ready
- Evaluated prompt behavior based on simulated outputs
- Learned to anticipate LLM behavior from the way prompts are worded

---

## 💡 Key takeaway

> A well-designed prompt behaves like part of your backend logic.  
> It must be predictable, evaluable, and tightly scoped — especially when used to trigger actions.

---

## 🧪 Next Step

The next module will connect a real LLM to test the prompt in action and iterate based on live outputs.

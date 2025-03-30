# 🧠 MCP Learning Journey

This is a personal learning project exploring how to build an **MCP (Model Context Protocol)** system using TypeScript and LLMs.

The goal is not to build a production-ready library, but to understand step by step:

- How to design an MCP architecture
- How to integrate LLMs into a backend protocol
- How to document and test each part with intention

Each module is tracked, tested and documented individually to consolidate real understanding.

---

## 🧱 What is MCP?

MCP (Model Context Protocol) is a conceptual protocol that describes **how an AI agent should interact with a backend system**.

The basic flow is:

1. Receive user input
2. Decide what action to take (via an Actor)
3. Load the current user state
4. Validate if the action is allowed (via Policy)
5. Execute the action (via Action Handler)
6. Format the result for the user (via View)

This repo simulates that flow with a focus on modularity and LLM integration.

---

## 📦 How to Run

1. Clone the repo
2. Install dependencies

```bash
yarn
```

3. Run the main entry (uses mock)

```bash
yarn dev
```

4. Run manual test

```bash
yarn test:llm
```

---

## 📚 Learning Modules

This project is structured as a modular learning experience.
Each new idea or concept is built, documented and committed independently.
• docs/MCP-Advanced/01-LLMActor.md: LLM-based actor implementation

More modules coming soon.

---

## ✍️ Author

Built by Juan Gipponi as part of an exploration into advanced AI-backend interaction and protocol design.

---

## 📘 License

MIT

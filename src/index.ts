import express from "express";
import { handleMCPRequest } from "./mcp-handler";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/mcp", async (req, res) => {
  const { status, body } = await handleMCPRequest(req.body);
  res.status(status).json(body);
});

app.listen(port, () => {
  console.log(`MCP local server running on http://localhost:${port}/mcp`);
});
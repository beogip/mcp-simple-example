import { VercelRequest, VercelResponse } from "@vercel/node";
import { handleMCPRequest } from "../src/mcp-handler";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed." });
  }

  const { status, body } = await handleMCPRequest(req.body);
  res.status(status).json(body);
}
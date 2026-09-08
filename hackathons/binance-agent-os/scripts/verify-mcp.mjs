const endpoint = String(process.env.PREX_MCP_URL || "https://prex.best/api/mcp").replace(/\/+$/, "")

async function rpc(id, method, params = {}) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      accept: "application/json, text/event-stream",
      "content-type": "application/json",
    },
    body: JSON.stringify({ jsonrpc: "2.0", id, method, params }),
  })
  const payload = await response.json()
  if (!response.ok || payload.error) {
    throw new Error(payload.error?.message || `MCP request failed with HTTP ${response.status}`)
  }
  return payload.result
}

const initialized = await rpc(1, "initialize", {
  protocolVersion: "2025-06-18",
  capabilities: {},
  clientInfo: { name: "PREX hackathon verifier", version: "1.0.0" },
})
const listed = await rpc(2, "tools/list")
const names = listed.tools.map((tool) => tool.name)
const expected = [
  "prex_get_market_context",
  "prex_rank_market_momentum",
  "prex_list_public_strategies",
  "prex_prepare_binance_trade_plan",
]
const missing = expected.filter((name) => !names.includes(name))
if (missing.length) throw new Error(`Missing tools: ${missing.join(", ")}`)

console.log(JSON.stringify({
  ok: true,
  endpoint,
  server: initialized.serverInfo,
  protocolVersion: initialized.protocolVersion,
  tools: names,
}, null, 2))


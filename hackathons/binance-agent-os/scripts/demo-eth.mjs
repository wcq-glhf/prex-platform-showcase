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
  if (!response.ok || payload.error || payload.result?.isError) {
    const message = payload.error?.message || payload.result?.content?.[0]?.text || `HTTP ${response.status}`
    throw new Error(message)
  }
  return payload.result
}

await rpc(1, "initialize", {
  protocolVersion: "2025-06-18",
  capabilities: {},
  clientInfo: { name: "PREX hackathon demo", version: "1.0.0" },
})
await fetch(endpoint, {
  method: "POST",
  headers: {
    accept: "application/json, text/event-stream",
    "content-type": "application/json",
  },
  body: JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }),
})
const result = await rpc(2, "tools/call", {
  name: "prex_get_market_context",
  arguments: {
    symbol: "ETHUSDT",
    exchange: "binance",
    interval: "1h",
    lookback_bars: 24,
  },
})
const data = result.structuredContent
console.log(JSON.stringify({
  exchange: data.exchange,
  symbol: data.symbol,
  interval: data.interval,
  updatedAt: data.updatedAt,
  latest: data.latest,
  momentum: data.momentum,
  indicators: data.indicators,
  structure: data.structure,
  strategyStudio: data.strategyStudio,
}, null, 2))

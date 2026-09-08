const endpoint = String(process.env.PREX_MCP_URL || "https://prex.best/api/mcp").replace(/\/+$/, "")

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    accept: "application/json, text/event-stream",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: "prex_get_market_context",
      arguments: {
        symbol: "ETHUSDT",
        exchange: "binance",
        interval: "1h",
        lookback_bars: 24,
      },
    },
  }),
})
const payload = await response.json()
if (!response.ok || payload.error || payload.result?.isError) {
  const message = payload.error?.message || payload.result?.content?.[0]?.text || `HTTP ${response.status}`
  throw new Error(message)
}

const data = payload.result.structuredContent
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


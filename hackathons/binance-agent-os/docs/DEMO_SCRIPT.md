# Three-minute demo script

## Recording safety checklist

- Use a clean host-agent task.
- Hide email, balances, orders, API keys, tokens, local paths, and account names.
- Show only the two MCP server names, connected state, and read-only purpose.
- Use Binance Market Data permission only.
- Stop immediately if a tool asks for trade, transfer, signature, or withdrawal authorization.

## 00:00–00:15 — Problem and product

Show the PREX homepage briefly.

Narration:

> Most users can describe a trading idea, but cannot collect live context, translate it into precise rules, and verify it before risking capital. PREX AI Strategy Agent connects those steps.

## 00:15–00:30 — Dual MCP connection

Show the host agent's MCP list:

- `binance-agent-os` — connected, Market Data only
- `prex-strategy` — connected, read-only

Do not expand OAuth details or account information.

## 00:30–01:05 — Live market context

Prompt:

```text
Use Binance Agent OS to read ETHUSDT price, recent 1-hour candles, funding, and order-book context. Do not trade.
```

Show that live facts come from Binance Agent OS.

## 01:05–01:40 — PREX analysis

Prompt:

```text
Use PREX to analyze ETHUSDT on 1h, including trend, 24-bar momentum, RSI, EMA structure, ATR volatility, volume, range position, and invalidation risks.
```

Keep the structured result on screen long enough to show the tool name and main conclusion.

## 01:40–02:10 — Multi-asset ranking

Prompt:

```text
Use PREX to rank BTCUSDT, ETHUSDT, SOLUSDT, BNBUSDT, and XRPUSDT by 24-bar momentum on Binance 1h candles. Do not trade.
```

Show the ranked list and strongest/weakest summary.

## 02:10–02:50 — Strategy Studio handoff

Ask the agent to produce the Strategy Studio link. Open it, review the prefilled draft, and run the backtest. Show cumulative return, maximum drawdown, trade count, and equity curve.

## 02:50–03:00 — Close

Narration:

> Binance Agent OS supplies current market context. PREX turns it into an understandable, testable strategy workflow. The user remains in control, and no trade is executed in this demo.


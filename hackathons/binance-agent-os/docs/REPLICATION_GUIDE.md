# Replicate PREX AI Strategy Agent

This guide reproduces the read-only Track A workflow shown in the demo. It does not require PREX source code, a PREX API key, exchange balances, or trading permission.

## 1. Prerequisites

- A desktop MCP-compatible AI host supported by Binance, such as Codex, Claude, ChatGPT, or VS Code.
- A desktop browser logged in to Binance if the selected host asks you to complete Binance authorization.
- Node.js 20 or newer only if you want to run the optional command-line checks.

## 2. Download the public submission

```bash
git clone https://github.com/wcq-glhf/prex-platform-showcase.git
cd prex-platform-showcase/hackathons/binance-agent-os
```

The verification scripts use only built-in Node.js APIs, so no package installation is required.

## 3. Verify the public PREX MCP

```bash
npm run verify
npm run demo:eth
```

The first command initializes the MCP connection and confirms that four PREX tools are available. The second runs a read-only ETHUSDT 1-hour analysis and prints the Strategy Studio handoff URL.

## 4. Connect Binance Agent OS

Follow the [official Binance Agent OS MCP setup guide](https://developers.binance.com/en/docs/agent-native/mcp-server/agentic) for your chosen host.

Use this Streamable HTTP endpoint:

```text
https://agent.binance.com/mcp/agentic
```

For this reproduction, select **Market Data** only. Account, Trade, and Transfer permissions are not needed. Do not open the MCP endpoint as a normal webpage; add it through the host's MCP settings.

## 5. Connect PREX Strategy MCP

Add a second Streamable HTTP server:

```text
https://prex.best/api/mcp
```

PREX Strategy MCP is public, read-only, and rate-limited. It does not require a token and exposes no order, transfer, signing, or withdrawal tool.

For Codex, copy the entries from [`config/codex.example.toml`](../config/codex.example.toml) into your MCP configuration, then restart or reconnect the MCP clients.

## 6. Apply the agent instructions

Use [`examples/agent-system-prompt.md`](../examples/agent-system-prompt.md) as the agent instructions. These instructions keep Binance responsible for current market facts and PREX responsible for analysis, ranking, risk checks, and strategy preparation.

Confirm that the host shows both servers as connected:

```text
binance-agent-os   connected   Market Data only
prex-strategy      connected   read-only
```

## 7. Reproduce the workflow

Run these prompts in order.

### A. Read current Binance context

```text
Use Binance Agent OS to read the current ETHUSDT price, recent 1-hour candles, funding rate, and order-book context. Do not trade.
```

### B. Analyze one asset with PREX

```text
Use PREX to analyze ETHUSDT on 1h. Explain trend, 24-bar momentum, RSI, EMA structure, ATR volatility, volume, range position, and invalidation risks.
```

### C. Rank multiple assets

```text
Use PREX to rank BTCUSDT, ETHUSDT, SOLUSDT, BNBUSDT, and XRPUSDT by 24-bar momentum on Binance 1h candles. Explain the strongest and weakest assets without placing a trade.
```

### D. Create a backtest-ready draft

```text
Turn the analysis into a complete 1-hour strategy draft and give me the PREX Strategy Studio link. I want to review the rules before running the backtest.
```

Open the returned URL. PREX fills the strategy idea, but the user must review it and explicitly start the backtest.

## 8. Expected result

The reproduced flow should show:

1. Live Binance market context returned through Binance Agent OS.
2. Structured PREX analysis with momentum, trend, volatility, volume, and risk evidence.
3. A five-asset relative-strength ranking.
4. A prefilled PREX Strategy Studio draft.
5. User-controlled backtest results, including return, maximum drawdown, trade count, and equity curve.

## Safety boundary

- The competition workflow is read-only.
- No funded Agentic sub-account is required.
- PREX MCP cannot place or cancel an order.
- Opening a Strategy Studio URL does not run a backtest or deploy a strategy.
- If any host requests Trade or Transfer permission, decline it for this reproduction.

Live market values will change, so exact prices and rankings may differ from the recorded demo while the workflow and output structure remain the same.

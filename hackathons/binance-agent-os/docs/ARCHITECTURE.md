# Architecture and trust boundaries

## Components

### AI host agent

The host agent interprets the user's request and orchestrates two independent MCP servers. It does not receive hard-coded credentials from this repository.

### Binance Agent OS MCP

Binance owns the venue connection, authentication, permission screen, live data, and any optional execution confirmation. The competition demo uses Market Data permission only.

### PREX Strategy MCP

PREX exposes a stateless Streamable HTTP MCP endpoint. It provides four bounded, read-only research tools. Requests are size-limited, allowlisted, and rate-limited.

### PREX Strategy Studio

Strategy Studio is the user-facing verification layer. A user can inspect the generated specification, run a historical backtest, review costs and risk, save the result, or publish it. Opening a draft URL does not run or deploy anything.

## Data flow

```mermaid
sequenceDiagram
    actor User
    participant Agent as AI Host Agent
    participant Binance as Binance Agent OS MCP
    participant PREX as PREX Strategy MCP
    participant Studio as PREX Strategy Studio

    User->>Agent: Analyze ETH and create a testable idea
    Agent->>Binance: Read live market context
    Binance-->>Agent: Price, candles, funding, order book
    Agent->>PREX: Analyze context / rank universe
    PREX-->>Agent: Structured indicators, risks, draft URL
    Agent-->>User: Explain facts, assumptions, and draft
    User->>Studio: Open and review draft
    User->>Studio: Explicitly run backtest
    Studio-->>User: Return, drawdown, trades, equity curve
```

## Why two MCPs

The split keeps venue authority and strategy intelligence separate. Binance remains authoritative for Binance market/account data. PREX remains responsible for transforming research context into transparent strategy specifications and validation workflows.

The architecture also prevents PREX's public research endpoint from holding Binance user tokens or silently executing trades.


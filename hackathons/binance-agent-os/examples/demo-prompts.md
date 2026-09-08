# Demo prompts

Use these prompts in sequence inside an MCP-compatible host with both servers connected.

## 1. Live Binance context

```text
Use Binance Agent OS to read the current ETHUSDT price, recent 1-hour candles, funding rate, and order-book context. Do not trade.
```

## 2. PREX single-asset analysis

```text
Use PREX to analyze ETHUSDT on 1h. Explain its trend, 24-bar momentum, RSI, EMA structure, ATR-based volatility, volume, range position, and the main invalidation risks.
```

## 3. Cross-market comparison

```text
Use PREX to rank BTCUSDT, ETHUSDT, SOLUSDT, BNBUSDT, and XRPUSDT by 24-bar momentum on Binance 1h candles. Explain the strongest and weakest assets without placing a trade.
```

## 4. Strategy handoff

```text
Turn the analysis into a complete 1-hour strategy draft and give me the PREX Strategy Studio link. I want to review the rules before running the backtest.
```

## 5. Optional risk plan

```text
Prepare, but do not execute, a Binance ETHUSDT trade plan with explicit entry, take-profit, stop-loss, notional, leverage, maximum loss, and risk/reward. If any required parameter is missing, ask for it.
```


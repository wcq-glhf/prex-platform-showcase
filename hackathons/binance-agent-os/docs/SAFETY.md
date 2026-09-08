# Safety model

## Default mode: read-only research

The competition workflow requests Binance Market Data permission and uses a PREX MCP server that contains no trading, transfer, signing, or withdrawal tool.

## Input controls

- MCP request bodies are capped at 64 KiB.
- Requests are rate-limited per IP.
- Exchanges, symbols, intervals, lookbacks, leverage, and monetary values are validated against explicit bounds.
- Cross-sectional ranking is limited to 20 symbols per request.
- Leverage planning is capped at 20x and produces an additional warning above 10x.

## Execution separation

`prex_prepare_binance_trade_plan` returns a normalized plan. It does not send the plan to Binance and does not count as user approval.

If a user separately enables Binance Trade permission, execution remains a Binance-side action governed by Binance's authorization and confirmation flow. PREX's existing exchange-API automation is independent from the hackathon MCP workflow.

## Privacy

- No private keys, seed phrases, access tokens, API secrets, account identifiers, balances, or orders are committed to this repository.
- Public strategy summaries omit private factor names, weights, parameters, filters, code, and credentials.
- Screen recordings must use a clean task and avoid expanding connection details.

## Failure behavior

- Missing or invalid parameters return a bounded error instead of silently guessing.
- Unsupported backtest intervals are explicitly adjusted in the draft note rather than silently changed.
- Failed market-data calls return an error and do not trigger a fallback trade.
- A generated Strategy Studio URL requires user review and submission.


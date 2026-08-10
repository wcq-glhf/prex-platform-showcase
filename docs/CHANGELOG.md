# PREX Product Updates

This changelog summarizes public product progress. It does not include source code, credentials, private infrastructure, or proprietary strategy logic.

## 2026-08-10

- Redesigned Strategy Studio around a blank, conversation-first workflow instead of a prefilled strategy.
- Added local conversation history and draft recovery so users can resume after an interrupted or failed strategy run.
- Added portfolio-engine compatibility checks, structured rule extraction, and focused follow-up questions for missing parameters.
- Added complete reference and popular cases, including an all-market-neutral strategy snapshot and a cross-sectional long/short strength rotation example.
- Added shareable read-only backtest links that keep private factors, parameters, and weights hidden.
- Added branded backtest result posters for X, Xiaohongshu, and Douyin with trader profile, return, maximum drawdown, and equity curve.
- Fixed strategy-navigation dropdown state so switching tabs closes the previous menu consistently.
- Added a new public Showcase screenshot for the conversation-first Strategy Studio.

## 2026-08-05

- Added a dedicated A-share and Hong Kong equity intelligence workspace.
- Added a prominent PREX AI core view with score, confidence, trend, a plain-language conclusion, and a conditional reference trade plan.
- Added separate A-share and Hong Kong selectors, searchable symbols, and progressive market-list loading without a full-page refresh.
- Added market breadth, active-stock sentiment, technical indicators, support/resistance, risk alerts, catalysts, execution checklist, announcements, filings, and public research context.
- Added interactive 15min, 1h, and 1d equity candlesticks with drag, wheel zoom, crosshairs, moving averages, volume, price/time axes, and point-level hover details for OHLC, change, range, volume, and turnover.
- Refined crypto and US stock contract terminals with denser full-width layouts, integrated symbol selection, improved account panels, and a broader chart-tool surface.
- Improved live-strategy minimum-allocation messaging so users see one practical recommendation based on the smaller viable capital reference.
- Continued Telegram signal iteration with V12 market scanning and institutional-flow context, while keeping execution under user control.
- Added a new public Showcase screenshot for the China and Hong Kong equity workspace and its candle-hover interaction.

## 2026-08-02

- Upgraded in-product backtest reports with synchronized account-equity and peak-drawdown panels.
- Added explicit left/right value axes, time labels, grid lines, responsive horizontal access, and hover details for timestamp, equity, cumulative return, and drawdown.
- Upgraded live leaderboard strategy detail pages with exchange-account equity snapshots, drawdown history, live period, current equity, period return, and maximum drawdown.
- Added bilingual hosted API report pages with interactive equity/drawdown charts, positions, and rebalance records.
- Added new public showcase screenshots for professional backtest analytics and live strategy performance.

## 2026-07-29

- Added a dedicated three-step product guide covering opportunity discovery, AI analysis and validation, and user-controlled execution.
- Added a first-login launcher that routes users into PREX AI analysis, natural-language backtesting, or the live strategy marketplace.
- Marked AI analysis and natural-language backtesting as the two recommended onboarding paths.
- Renamed the strategy exploration area to Strategy Marketplace and clarified the navigation labels for Backtest and Live Management.
- Updated the home-page View Markets action to open the US stock perpetual workspace.
- Added authenticated Telegram Bot binding through `PREXSignalsBot`.
- Added qualified AI opportunity notifications, test messages, status refresh, `/stop` unsubscribe, and follow-up updates for invalidated or reversed setups.
- Reduced the guest natural-language backtest allowance from five runs to two before login is required.
- Refreshed the public showcase screenshots for Home, Guided Onboarding, Product Workflow, Telegram AI Alerts, and Strategy Marketplace.

## 2026-07-21

- Updated the US stock perpetuals product screenshot to show the full candlestick, order-entry, and PREX AI workspace.
- Added the multi-LLM strategy-generation interface, showing OpenAI, Anthropic, DeepSeek, MiniMax, and Gemini provider selection.
- Refreshed the real backtest result screenshot with a higher-return, lower-drawdown market-neutral example, while retaining costs, the equity curve, data coverage, and rebalance records.

## 2026-07-12

- Reframed PREX as an AI trading agent platform for global markets, with crypto, prediction markets, US stock contracts, and strategy execution presented under one workflow.
- Added a cleaner strategy exploration surface with market signals, live strategy rows, strategy detail pages, performance charts, and copy-entry actions.
- Improved live strategy ranking so real external strategies can appear with capital, return, drawdown, order activity, and historical strategy records.
- Added crypto contract market support alongside US stock contracts, including Hyperliquid market routing where supported.
- Added PREX AI short-term analysis for crypto and US stock contracts, using trend, structure, momentum, volume, market flow, large orders, funding, news, and BTC beta where relevant.
- Added quick-fill trade parameters from PREX AI analysis, including direction, entry reference, take-profit, and stop-loss fields.
- Improved PREX AI wording so tight support/resistance is described as insufficient trading space instead of misleading exact key levels.
- Added optional take-profit and stop-loss controls to contract order entry.
- Improved Hyperliquid funding-account and trading-account flows, including deposit, transfer, withdrawal, and account state display.
- Added natural-language strategy translation improvements, including a PREX-side DeepSeek translator fallback for ambiguous user strategy text.
- Added AI-generated strategy drafting for backtests with user-configured model providers and saved provider settings.
- Added guest backtest usage limits before requiring login.
- Improved production market intelligence inputs by combining exchange-derived flow, large-order snapshots, funding rates, BlockBeats news, and benchmark data.
- Updated public product documentation and showcase feature descriptions.

## Earlier 2026 Updates

- Added US stock contract workspace with live quotes, candlestick charts, leverage controls, market and limit orders, position closing, active orders, and trade history.
- Added strategy library filters for digital assets and US stock contracts.
- Added saved backtest strategies and live-strategy setup flows.
- Added portfolio views for prediction-market positions and connected exchange positions.
- Added owner analytics boards for traffic, DAU, feature usage, and trading-volume views.
- Added mobile web layout fixes for markets, strategies, analytics, and scanner pages.
- Added Meme Scanner token discovery and risk-screening surfaces.
- Added liquidity and liquidation-pressure research tools.

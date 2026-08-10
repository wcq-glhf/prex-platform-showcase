# PREX Feature Overview

This document describes the public-facing PREX product capabilities. It intentionally avoids implementation details and source code.

## 1. Global Market Surface

PREX is moving from a single-market trading tool toward an AI trading agent platform for global markets.

Current capabilities:

- Unified market navigation for prediction markets, crypto contracts, and US stock contracts.
- Cleaner top-level navigation for Markets, Strategies, Tools, Portfolio, Leaderboard, Settings, and API.
- Product update notification bell for recent feature changes.
- English and Chinese UI support across core surfaces.
- Mobile web improvements for dense trading and strategy pages.

## Guided Onboarding And Product Workflow

PREX now gives new users a clearer path through the product.

Current capabilities:

- A first-login goal launcher that can take users directly to PREX AI analysis, natural-language backtesting, or the live strategy marketplace.
- AI analysis and natural-language backtesting are highlighted as recommended starting points.
- A dedicated workflow page explains the journey from opportunity discovery to analysis and validation, followed by user-controlled execution.
- The home-page market CTA opens the US stock perpetual workspace directly.
- The strategy navigation now uses clearer Strategy Marketplace, Backtest, and Live Management labels.

## Telegram AI Opportunity Alerts

PREX supports account-linked Telegram notifications through `PREXSignalsBot`.

Current capabilities:

- One-click Bot launch from the authenticated Settings page.
- Secure account linking through a single-use start token.
- Qualified AI opportunity notifications.
- Follow-up messages when a setup is invalidated or reverses.
- Test-message delivery and connection-state refresh.
- `/stop` unsubscribe support.
- Analysis intervals such as 15min and 1h describe the candle context; PREX does not automatically place or close orders.

## 2. Prediction Markets

PREX provides a cleaner interface for discovering and inspecting prediction markets.

Current capabilities:

- Market browsing and search.
- Active market filtering.
- Multilingual display and translation support.
- Trading-focused layout for scanning price, volume, liquidity, and market state.
- Event-themed discovery support.
- Polymarket-oriented trading and portfolio workflows.

## 3. Crypto And US Stock Contracts

PREX now includes contract trading workspaces for supported crypto and US stock contract markets.

Current capabilities:

- Supported markets include major US technology, ETF, and high-liquidity stock-perp symbols where exchange support exists.
- Supported crypto markets include major liquid contract symbols where exchange support exists.
- Live quote and exchange-rule lookup for Binance, OKX, and Hyperliquid-oriented surfaces where available.
- Interactive candlestick chart with interval switching, hover data, zoom, and drag.
- Market and limit order entry.
- Open and close flows.
- Leverage input.
- Exchange account selector.
- Open limit order display and cancellation.
- Trade history and order-status display.
- Chinese and English exchange error messaging for common Binance/OKX cases.
- Optional take-profit and stop-loss inputs for contract order entry.
- PREX AI short-term analysis card with direction, confidence, structure evidence, support/resistance context, and quick-fill trade parameters.
- Crypto analysis can include BTC benchmark context, market flow, large-order snapshots, funding rates, and BlockBeats news.
- US stock contract analysis uses stock-specific long/short thresholds and treats short setups more strictly.

## 4. China And Hong Kong Equity Intelligence

PREX includes a decision-oriented research workspace for supported A-shares and Hong Kong stocks.

Current capabilities:

- Separate A-share and Hong Kong stock selectors without reloading the full page.
- Searchable and progressively loaded symbol coverage.
- A prominent PREX AI core view with score, confidence, trend, and a plain-language conclusion.
- Reference entry zone, breakout level, invalidation level, targets, and risk/reward context.
- Market-wide sentiment and active-stock sentiment shown as distinct inputs.
- MA5, MA20, MA60, RSI, MACD, ATR, range position, support, resistance, volume, turnover, and breadth context.
- Risk alerts, catalysts, execution checklist, company filings, announcements, and public research links.
- Interactive 15min, 1h, and 1d candlestick views with drag, wheel zoom, reset, moving averages, volume, price/time axes, and crosshairs.
- Point-level candle hover details for time, open, high, low, close, price change, percentage change, range, volume, and turnover.
- Chinese and English presentation across the analysis surface.
- Decision-support positioning only; reference levels are not broker execution or personalized investment advice.

## 5. Portfolio

PREX includes a portfolio view for user positions and trading state.

Current capabilities:

- Prediction-market position visibility.
- Connected exchange swap positions.
- Exchange account filtering.
- Position search by symbol, exchange, and direction.
- Market and limit close-position workflow.
- Position value, entry value, mark price, unrealized PnL, and direction display.
- Multilingual market-name and position display improvements.

## 6. Backtesting

PREX supports strategy research for exchange-traded strategies.

Current capabilities:

- Conversation-first blank workspace for describing a strategy without inheriting a preset.
- Local chat history and draft recovery for interrupted or failed strategy runs.
- Portfolio-engine compatibility checks before execution, with focused follow-up questions for missing inputs.
- Complete reference and popular cases, including all-market-neutral and cross-sectional long/short rotation examples.
- Natural-language strategy input.
- AI-assisted strategy drafting with user-configured model providers.
- PREX-side strategy translation fallback for ambiguous natural-language strategy text.
- Factor-based strategy parsing and backtest execution.
- Binance USDT perpetual backtesting data.
- Supported backtest intervals include 1h, 4h, and 1d.
- Symbol presets for major coins, popular coins, custom selections, and broad high-liquidity universes.
- Backtest result views for equity curve, return, loss limit, rebalance history, and data coverage.
- Professional dual-panel analytics with a left account-equity axis, right peak-drawdown axis, time scale, grid lines, and synchronized equity/drawdown curves.
- Point-level chart hover details for timestamp, account equity, cumulative return, and drawdown.
- Shareable read-only result links that keep private strategy factors, parameters, and weights hidden.
- Branded result posters for X, Xiaohongshu, and Douyin with the trader profile, strategy name, return, maximum drawdown, and equity curve.
- Hosted bilingual API report pages with interactive equity curves, drawdowns, positions, and rebalance records.
- Background backtest task mode for heavier jobs.
- Guest backtest quota before login is required.

## 7. Strategy Library And Live Execution

PREX supports user-controlled live strategy execution through exchange API credentials.

Current capabilities:

- Strategy library with live strategy rows, detail pages, professional equity/drawdown charts, and copy-trading setup.
- Digital-asset and stock-perp strategy filters.
- Binance and OKX API credential configuration.
- Credential test flow before enabling live strategies.
- Encrypted credential storage in the PREX backend.
- Trading-only permission guidance; withdrawal permission is not required.
- Exchange minimum-order and precision checks.
- Fixed-target-weight strategy support for stock-perp beta strategies.
- External live strategy sync into PREX for tracking, ranking, and copy-trading setup.
- Stop-and-close-position workflow when switching strategies.
- Scheduled live strategy execution based on candle timing.
- Strategy detail pages for live and saved strategies, including exchange-account equity snapshots, performance, period return, drawdown history, and copy entry points.

## 8. Strategy Ranking And Copy Trading

PREX is building toward a practical strategy marketplace and copy-trading layer.

Current capabilities:

- Strategy leaderboard focused on real live-traded strategies.
- Live strategy performance, ROI, drawdown, capital, order activity, and follower-style metadata.
- Live strategy charts with synchronized equity and drawdown panels, explicit axes, time labels, hover inspection, and responsive horizontal access.
- Copy-trading subscription setup.
- Allocation, leverage, slippage, and loss-cap controls.
- Strategy candidate saving from backtest results.
- Public copy/live strategies exposed as executable candidates.
- Exchange-side external strategies can appear in the leaderboard and copy-trading flow.
- Historical external strategy records can remain visible after real trading activity has occurred.

## 9. Meme Scanner

The Meme Scanner is designed for small-cap token discovery and risk screening.

Signals used:

- Turnover.
- Momentum.
- Market cap and liquidity structure.
- Trading activity.
- Social/X-mentioned heat.
- Holder count.
- Top holder concentration.
- Bundle/dev/insider concentration.
- Risk flags.

Views:

- Scanner table with token logos, chain, score, signal, price, market cap, liquidity, turnover, and risk data.
- Detail page with token profile, liquidity pools, top traders, risk structure, and K-line chart.
- K-line chart supports interval switching, drag, zoom, reset, and hover tooltip.

## 10. Liquidity And Liquidation-Pressure Tools

PREX includes futures research tools for estimating liquidity and liquidation-pressure zones.

Current capabilities:

- BTC and ETH focused map.
- Multi-exchange comparison surface.
- Real visible order-book columns where available.
- Broader price range visualization.
- Mouse hover values and zoom/drag interaction.
- Designed as a trading research aid rather than an exchange account-level liquidation feed.

## 11. Invite, Analytics, Updates, And Support

PREX includes lightweight growth, analytics, and support workflows.

Current capabilities:

- Random invite codes and personal invite links.
- Invited-user tracking.
- Fee-discount and reward-accounting logic.
- Owner-only analytics board.
- Page view, DAU, visitor, IP-hash, feature usage, and trading-volume reporting.
- Notification bell for product updates.
- Customer support widget with Telegram contact.

## 12. Mobile Web Experience

PREX supports mobile browser access for core product surfaces.

Recent improvements:

- Responsive layout fixes for phone-sized screens.
- Better handling of dense trading, strategy, analytics, and scanner content on mobile.
- Reduced horizontal clipping and incomplete content display on small screens.

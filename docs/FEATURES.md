# PREX Feature Overview

This document describes the public-facing PREX product capabilities. It intentionally avoids implementation details and source code.

## 1. Global Market Surface

PREX is moving from a single-market trading tool toward an AI trading agent platform for global markets.

Current capabilities:

- Unified market navigation for prediction markets and US stock perpetuals.
- Cleaner top-level navigation for Markets, Strategies, Tools, Portfolio, Leaderboard, Settings, and API.
- Product update notification bell for recent feature changes.
- English and Chinese UI support across core surfaces.
- Mobile web improvements for dense trading and strategy pages.

## 2. Prediction Markets

PREX provides a cleaner interface for discovering and inspecting prediction markets.

Current capabilities:

- Market browsing and search.
- Active market filtering.
- Multilingual display and translation support.
- Trading-focused layout for scanning price, volume, liquidity, and market state.
- Event-themed discovery support.
- Polymarket-oriented trading and portfolio workflows.

## 3. US Stock Perpetuals

PREX now includes a Stock Perps workspace for supported US stock perpetual contracts.

Current capabilities:

- Supported markets include major US technology, ETF, and high-liquidity stock-perp symbols where exchange support exists.
- Live quote and exchange-rule lookup for Binance and OKX where available.
- Interactive candlestick chart with interval switching, hover data, zoom, and drag.
- Market and limit order entry.
- Open and close flows.
- Leverage input.
- Exchange account selector.
- Open limit order display and cancellation.
- Trade history and order-status display.
- Chinese and English exchange error messaging for common Binance/OKX cases.

## 4. Portfolio

PREX includes a portfolio view for user positions and trading state.

Current capabilities:

- Prediction-market position visibility.
- Connected exchange swap positions.
- Exchange account filtering.
- Position search by symbol, exchange, and direction.
- Market and limit close-position workflow.
- Position value, entry value, mark price, unrealized PnL, and direction display.
- Multilingual market-name and position display improvements.

## 5. Backtesting

PREX supports strategy research for exchange-traded strategies.

Current capabilities:

- Natural-language strategy input.
- Factor-based strategy parsing and backtest execution.
- Binance USDT perpetual backtesting data.
- Supported backtest intervals include 1h, 4h, and 1d.
- Symbol presets for major coins, popular coins, custom selections, and broad high-liquidity universes.
- Backtest result views for equity curve, return, loss limit, rebalance history, and data coverage.
- Background backtest task mode for heavier jobs.
- Login-required access for running backtests.

## 6. Strategy Library And Live Execution

PREX supports user-controlled live strategy execution through exchange API credentials.

Current capabilities:

- Strategy library with live strategy cards and copy-trading setup.
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

## 7. Strategy Ranking And Copy Trading

PREX is building toward a practical strategy marketplace and copy-trading layer.

Current capabilities:

- Strategy leaderboard focused on real live-traded strategies.
- Live strategy performance, ROI, drawdown, capital, and follower-style metadata.
- Copy-trading subscription setup.
- Allocation, leverage, slippage, and loss-cap controls.
- Strategy candidate saving from backtest results.
- Public copy/live strategies exposed as executable candidates.
- Exchange-side external strategies can appear in the leaderboard and copy-trading flow.

## 8. Meme Scanner

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

## 9. Liquidity And Liquidation-Pressure Tools

PREX includes futures research tools for estimating liquidity and liquidation-pressure zones.

Current capabilities:

- BTC and ETH focused map.
- Multi-exchange comparison surface.
- Real visible order-book columns where available.
- Broader price range visualization.
- Mouse hover values and zoom/drag interaction.
- Designed as a trading research aid rather than an exchange account-level liquidation feed.

## 10. Invite, Analytics, Updates, And Support

PREX includes lightweight growth, analytics, and support workflows.

Current capabilities:

- Random invite codes and personal invite links.
- Invited-user tracking.
- Fee-discount and reward-accounting logic.
- Owner-only analytics board.
- Page view, DAU, visitor, IP-hash, feature usage, and trading-volume reporting.
- Notification bell for product updates.
- Customer support widget with Telegram contact.

## 11. Mobile Web Experience

PREX supports mobile browser access for core product surfaces.

Recent improvements:

- Responsive layout fixes for phone-sized screens.
- Better handling of dense trading, strategy, analytics, and scanner content on mobile.
- Reduced horizontal clipping and incomplete content display on small screens.

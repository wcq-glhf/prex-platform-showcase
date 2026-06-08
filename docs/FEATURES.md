# PREX Feature Overview

This document describes the public-facing PREX product capabilities. It intentionally avoids implementation details and source code.

## 1. Prediction Market Surface

PREX provides a cleaner interface for discovering and inspecting prediction markets.

Current capabilities:

- Market browsing and search.
- Active market filtering.
- Multilingual display support.
- Market translation support.
- Trading-focused layout for scanning price, volume, and market state.
- World Cup and event-themed market discovery support.

## 2. Polymarket Trading UX

PREX is built around simplifying Polymarket usage.

Current capabilities:

- Wallet connection.
- Trading flow inside PREX without forcing users to jump to Polymarket for every step.
- Support for user-controlled wallets.
- Builder fee attribution support.
- Referral-aware trading workflow.
- Dry-run guard for safer testing environments.

## 3. Portfolio

PREX includes a portfolio view for user positions and trading state.

Current capabilities:

- Position-focused layout.
- Wallet-linked state.
- Market names and portfolio content with multilingual display improvements.
- Prediction-market position visibility.

## 4. Backtesting

PREX supports strategy research for crypto futures.

Current capabilities:

- Natural-language strategy input.
- Factor-based strategy parsing and backtest execution.
- Binance USDT perpetual backtesting data.
- Supported backtest intervals include 1h, 4h, and 1d.
- Symbol presets for major coins, popular coins, custom selections, and broad high-liquidity universes.
- Backtest result views for equity curve, return, loss limit, rebalance history, and data coverage.
- Background backtest task mode for heavier jobs.
- Login-required access for running backtests.

## 5. Live Strategy Execution

PREX supports user-controlled live strategy execution through exchange API credentials.

Current capabilities:

- Binance and OKX API credential configuration.
- Credential test flow before enabling live strategies.
- Encrypted credential storage in PREX backend.
- Trading-only permission guidance; withdrawal permission is not required.
- Exchange minimum-order and precision checks.
- One-running-strategy-per-account guard to avoid conflicting rebalances.
- Stop-and-close-position workflow when switching strategies.
- Scheduled live strategy execution based on candle timing.
- Live strategy status, recent actions, and execution notes.

## 6. Strategy Ranking And Copy-Trading Foundation

PREX is building toward a practical strategy marketplace and copy-trading layer.

Current capabilities:

- Strategy leaderboard focused on real live-traded strategies.
- Mock strategies are excluded from live ranking.
- Live strategy notional and follower-style metadata.
- Copy-trading subscription service foundation.
- Strategy candidate saving from backtest results.

## 7. Meme Scanner

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

## 8. Liquidity And Liquidation-Pressure Map

PREX includes a BTC/ETH futures research view for estimating liquidity and liquidation-pressure zones.

Current capabilities:

- BTC and ETH focused map.
- Multi-exchange comparison surface.
- Real visible order-book columns where available.
- Broader price range visualization.
- Mouse hover values and zoom/drag interaction.
- Designed as a trading research aid rather than an exchange account-level liquidation feed.

## 9. Invite And Referral

PREX includes a user invite system for community growth.

Current capabilities:

- Random invite codes.
- Personal invite links.
- Invited-user tracking.
- Fee-discount and reward-accounting logic.
- Withdrawal threshold for referral rewards.

## 10. Analytics Board

PREX includes an owner-only analytics board.

Current capabilities:

- Password-gated access.
- Page view tracking.
- DAU and visitor reporting.
- IP-hash based counts.
- Top page statistics.
- Recent traffic summaries.
- Trading-volume statistics for CEX, Polymarket, live, dry-run, paper, and test modes.
- Feature traffic tracking for backtest and live strategy surfaces.

## 11. Product Updates And Support

PREX includes lightweight user communication tools.

Current capabilities:

- Notification bell for product updates.
- Customer support widget with Telegram contact.
- Public-facing update notes for recent feature changes.

## 12. Multilingual Experience

PREX supports English and Chinese UI text in the main product areas.

Recent improvements:

- Navigation translations.
- Markets display translations.
- Portfolio market-name translation.
- Auth and invite page copy improvements.

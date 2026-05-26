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

## 2. Polymarket Trading UX

PREX is built around simplifying Polymarket usage.

Current capabilities:

- Wallet connection.
- Trading flow inside PREX without forcing users to jump to Polymarket for every step.
- Support for user-controlled wallets.
- Builder fee attribution support.
- Dry-run guard for safer testing environments.

## 3. Portfolio

PREX includes a portfolio view for user positions and trading state.

Current capabilities:

- Position-focused layout.
- Wallet-linked state.
- Market names and portfolio content with multilingual display improvements.

## 4. Strategy And Paper Trading

PREX includes paper strategy infrastructure for validating trading ideas before committing real capital.

Current capabilities:

- Per-strategy virtual bankroll.
- Simulated limit orders.
- Cash reservation for open orders.
- Entry and exit order TTL.
- Simulated builder fee, slippage, and cancellation cost assumptions.
- Strategy logs and summaries.
- Split runner modes for fast crypto strategies and slower weather/other strategies.

Example strategy families:

- Crypto 5-minute up/down market signals.
- CEX order book lead/lag signals.
- Yes/No sum and probability mispricing checks.
- Threshold ladder markets.
- Weather-market low-price bucket discovery.

## 5. Meme Scanner

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

## 6. Invite And Referral

PREX includes a user invite system for community growth.

Current capabilities:

- Random invite codes.
- Personal invite links.
- Invited-user tracking.
- Fee-discount and reward-accounting logic.
- Withdrawal threshold for referral rewards.

## 7. Analytics Board

PREX includes an owner-only analytics board.

Current capabilities:

- Password-gated access.
- Page view tracking.
- DAU and visitor reporting.
- IP-hash based counts.
- Top page statistics.
- Recent traffic summaries.

## 8. Multilingual Experience

PREX supports English and Chinese UI text in the main product areas.

Recent improvements:

- Navigation translations.
- Markets display translations.
- Portfolio market-name translation.
- Auth and invite page copy improvements.


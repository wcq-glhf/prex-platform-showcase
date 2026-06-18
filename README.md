# prex-platform-showcase

PREX is an AI trading terminal for prediction markets, crypto strategy research, and on-chain opportunity discovery.

Live product: [https://prex.best](https://prex.best)

> This repository is a public product showcase. It contains feature descriptions, screenshots, and roadmap notes only. It does not contain PREX source code, private infrastructure, credentials, or trading secrets.

## What PREX Does

PREX helps users discover, analyze, test, and trade market opportunities from one interface.

- Aggregates prediction-market data and trading workflows.
- Supports Polymarket-focused market browsing, portfolio views, and trading UX.
- Provides natural-language strategy backtesting for Binance USDT perpetuals.
- Supports user-configured Binance / OKX live strategy execution workflows for saved backtests and public leaderboard strategies.
- Tracks real live-strategy performance for strategy ranking, copy-trading exploration, and live setup discovery.
- Adds a Meme Scanner for detecting high-momentum small-cap tokens using on-chain and social signals.
- Includes a BTC/ETH liquidity and liquidation-pressure map for futures research.
- Includes referral and fee-accounting workflows for community growth.
- Tracks product usage, feature traffic, and trading volume through an owner-only analytics board.

## Product Preview

### Home

![PREX Home](assets/screenshots/home.png)

### Prediction Markets

![PREX Markets](assets/screenshots/markets.png)

### Meme Scanner

![PREX Meme Scanner](assets/screenshots/meme-scanner.png)

### Token Detail With K-Line

![PREX Meme Token Detail](assets/screenshots/meme-token-detail.png)

## Core Modules

| Module | Description |
| --- | --- |
| Markets | Browse active prediction markets, search/filter opportunities, and inspect tradable markets. |
| Trading UX | Connect wallet, manage trading flow, and submit Polymarket orders through PREX. |
| Portfolio | Review user positions and wallet-linked trading state. |
| Backtesting | Describe a futures strategy in natural language and run factor-based backtests on Binance USDT perpetual data. |
| Live Strategies | Configure Binance / OKX API credentials and run user-controlled live strategy execution from saved backtests or public leaderboard strategies, with exchange minimum-order safeguards. |
| Strategy Ranking | Display real live-traded strategies and practical performance signals, and expose public strategies as copy/live candidates. |
| Meme Scanner | Detect on-chain meme/token opportunities using liquidity, turnover, market cap, social heat, risk concentration, and K-line data. |
| Liquidity Map | Estimate BTC/ETH futures liquidity and liquidation-pressure zones across major exchanges. |
| Invite System | User invite links, fee discounts, and reward accounting. |
| Analytics Board | Owner-only traffic, DAU, page view, visitor, IP-hash, feature usage, and trading-volume statistics. |

## Why It Exists

Prediction markets and crypto markets are fragmented. Users often need to switch between several sites, wallets, exchange tools, order books, forecasts, strategy scripts, and social feeds before making a decision.

PREX is designed to reduce that workflow into one product surface:

- discover the market,
- inspect the data,
- test the edge,
- execute with fewer manual steps,
- review results.

## 中文简介

PREX 是一个面向预测市场、合约策略和链上机会发现的 AI 交易终端。

当前产品重点：

- 聚合预测市场信息和交易流程；
- 优化 Polymarket 交易体验；
- 支持用自然语言描述合约策略，并进行 Binance USDT 永续回测；
- 支持用户配置 Binance / OKX API 后，对自己的回测策略或排行榜公开策略进行自控实盘策略执行；
- 支持真实实盘策略排行榜、跟单功能探索和 live 策略候选发现；
- 增加妖币检测器，用链上数据、社交热度、成交换手、市值结构和风险集中度给小币种打分；
- 提供 BTC / ETH 合约流动性和清算压力估算地图；
- 支持邀请返佣和用户增长体系；
- 提供站长数据看板，观察 DAU、访问量、页面浏览、IP 统计、功能使用和交易量等。

## Documentation

- [Feature Overview](docs/FEATURES.md)
- [Roadmap](docs/ROADMAP.md)
- [Product FAQ](docs/FAQ.md)

## Contact

Interested in PREX, prediction markets, strategy tooling, or integrations?

- Website: [https://prex.best](https://prex.best)
- X: [https://x.com/No_tariff3](https://x.com/No_tariff3)
- Telegram: [@WARD999999](https://t.me/WARD999999)
- Email: hello@prex.best

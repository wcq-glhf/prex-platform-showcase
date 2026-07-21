# prex-platform-showcase

PREX is an AI trading agent platform for global markets.

Live product: [https://prex.best](https://prex.best)

> This repository is a public product showcase. It contains feature descriptions, screenshots, and roadmap notes only. It does not contain PREX source code, private infrastructure, credentials, or trading secrets.

## What PREX Does

PREX helps users discover markets, evaluate strategies, run live execution, and manage risk from one interface.

- Provides an AI-assisted trading workflow for global market opportunities across prediction markets, crypto contracts, US stock contracts, exchange-traded strategies, and on-chain research.
- Aggregates prediction-market data and trading flows.
- Adds crypto and US stock contract workspaces with live prices, interactive candlesticks, leverage controls, market and limit orders, position closing, open orders, and trade history.
- Adds PREX AI analysis for supported contract markets, combining trend, structure, momentum, volume, market flow, large orders, funding, news, and benchmark context.
- Supports natural-language strategy backtesting and AI-assisted strategy drafting for exchange-traded strategies.
- Supports Binance / OKX / Hyperliquid-oriented account flows where supported by the product surface.
- Tracks live strategy performance, strategy rankings, and copy-trading setup flows.
- Separates digital-asset strategies and stock-contract strategies in the strategy library.
- Shows connected exchange positions inside the portfolio experience.
- Includes a Meme Scanner for on-chain token discovery and risk screening.
- Includes liquidity and liquidation-pressure tools for futures research.
- Includes referral, product-update, support, analytics, and mobile web workflows.

## Product Preview

### Home

![PREX Home](assets/screenshots/home.png)

### US Stock Perpetuals

![PREX Stock Perps](assets/screenshots/stock-perps.png)

### Strategy Library And Copy Trading

![PREX Strategies](assets/screenshots/strategies.png)

### Multi-LLM Strategy Generation

![PREX Multi-LLM Strategy Generation](assets/screenshots/llm-strategy-generation.png)

PREX can generate parseable strategies through OpenAI, Anthropic, DeepSeek, MiniMax, or Gemini before running the backtest workflow.

### Natural-Language Backtest Results

![PREX Backtest Results](assets/screenshots/backtest-results.png)

Illustrative historical market-neutral backtest from March 1 to July 21, 2026, including fees, slippage, data coverage, and rebalance records. Past performance does not guarantee future results.

### Prediction Markets

![PREX Markets](assets/screenshots/markets.png)

### Meme Scanner

![PREX Meme Scanner](assets/screenshots/meme-scanner.png)

## Core Modules

| Module | Description |
| --- | --- |
| Markets | Browse prediction markets, crypto contracts, and US stock contracts from one market surface. |
| Contract Trading | Trade supported crypto and US stock contracts with leverage, market/limit orders, close flows, open orders, and trade history. |
| PREX AI Analysis | Generate short-term market reads with direction, confidence, structure evidence, key levels, and quick-fill trade parameters. |
| Trading UX | Connect wallet or exchange account, manage order flow, and reduce manual switching between tools. |
| Portfolio | Review prediction-market positions and connected exchange positions in one place. |
| Backtesting | Describe a strategy in natural language, optionally use an AI model to draft it, and run factor-based backtests on exchange data. |
| Live Strategies | Configure Binance / OKX API credentials and run user-controlled live strategy execution from saved backtests, external live strategies, or public candidates. |
| Strategy Library | Compare strategy performance, rankings, capital, drawdown, detail pages, and copy-trading setup across digital-asset and stock-contract strategies. |
| Copy Trading | Let users follow supported strategies through their own connected exchange accounts, with allocation and risk controls. |
| Meme Scanner | Detect on-chain token opportunities using liquidity, turnover, market cap, social heat, holder concentration, and risk signals. |
| Liquidity Tools | Estimate futures liquidity and liquidation-pressure zones across major venues. |
| Product Updates | Notification bell for recent product changes, releases, and strategy workflow updates. |
| Analytics Board | Owner-only traffic, DAU, feature usage, and trading-volume statistics. |
| Mobile Web | Responsive mobile browsing support for dense trading, strategy, and scanner views. |

## Why It Exists

Most users cannot monitor global markets all day, build executable strategies, evaluate signals transparently, and manage risk across wallets and exchanges at the same time.

PREX is designed to reduce that workflow into one product surface:

- discover the market,
- inspect live data,
- evaluate strategy performance,
- turn ideas into strategy workflows,
- execute or copy trades through connected accounts,
- review positions, orders, and results.

## 中文简介

PREX 是一个面向全球市场的 AI Trading Agent 平台，覆盖预测市场、美股合约、交易所策略和其他高流动性市场。

当前产品重点：

- 聚合预测市场、加密货币合约和美股合约交易界面；
- 支持合约实时价格、K 线、杠杆、市价/限价、平仓、委托、历史交易和止盈止损；
- 支持 PREX AI 对合约市场进行短线方向、结构、资金流、大单、新闻和关键价位分析；
- 支持自然语言策略回测和 AI 辅助策略生成；
- 支持 Binance / OKX / Hyperliquid 相关账户和交易流程；
- 支持策略库、排行榜、策略详情、跟单设置、数字资产 / 美股策略分类；
- 支持投资组合中展示预测市场持仓和交易所持仓；
- 提供妖币检测、清算/流动性工具、产品更新、客服、数据看板和移动端适配。

## Documentation

- [Feature Overview](docs/FEATURES.md)
- [Product Updates](docs/CHANGELOG.md)
- [Roadmap](docs/ROADMAP.md)
- [Product FAQ](docs/FAQ.md)

## Contact

Interested in PREX, AI trading agents, strategy tooling, or market infrastructure?

- Website: [https://prex.best](https://prex.best)
- X: [https://x.com/No_tariff3](https://x.com/No_tariff3)
- Telegram: [@WARD999999](https://t.me/WARD999999)
- Email: hello@prex.best

# @asset-projects/token-list

[![npm](https://img.shields.io/npm/v/@asset-projects/token-list)](https://unpkg.com/@asset-projects/token-list@latest/)[![Test](https://github.com/asset-project/token-list/actions/workflows/node.js.yml/badge.svg)](https://github.com/asset-project/token-list/actions/workflows/node.js.yml)[![Check Markdown links](https://github.com/asset-project/token-list/actions/workflows/linkchecker.yml/badge.svg)](https://github.com/asset-project/token-list/actions/workflows/linkchecker.yml)

This library maintains a list of ERC20 tokens that exist on the ethereum mainnet, L2 and sidechain.

It manages the main tokens and the top 100 or so tokens.

Support for Ethereum mainnet, optimistic-ethereum, arbitrum, polygon, and Other chains will be supported in the future.

## Install on your project

```zsh
  # npm
  npm i @asset-projects/token-list

  # yarn
  yarn add @asset-projects/token-list
```

# How to Use

```ts
import { tokenList } from '@asset-projects/token-list';

console.log(tokenList().mainnet.ERC20);
// [{"chainId": 1, "type": "ERC20", "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "name": "Wrapped BTC", ...}]
```

## References

This project was created with reference to [uniswap/default-token-list](https://github.com/Uniswap/default-token-list) and [trustWallet/assets](https://github.com/trustwallet/assets).

It was created because these projects lacked resources for L2 contract addresses such as optimism and arbitrum.

Respect to these projects!

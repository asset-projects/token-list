# @asset-projects/token-list

<!-- markdown-link-check-disable -->

[![npm](https://img.shields.io/npm/v/@asset-projects/token-list)](https://unpkg.com/@asset-projects/token-list@latest/)[![Package size](https://badgen.net/bundlephobia/minzip/@asset-projects/token-list)](https://bundlephobia.com/package/@asset-projects/token-list)[![!License](https://badgen.net/npm/license/@asset-projects/token-balance)](https://github.com/asset-projects/token-balance/blob/main/LICENSE)
[![Build](https://github.com/asset-projects/token-list/actions/workflows/build.yml/badge.svg)](https://github.com/asset-projects/token-list/actions/workflows/build.yml)[![Test](https://github.com/asset-projects/token-list/actions/workflows/node.js.yml/badge.svg)](https://github.com/asset-projects/token-list/actions/workflows/node.js.yml)[![Check Markdown links](https://github.com/asset-projects/token-list/actions/workflows/linkchecker.yml/badge.svg)](https://github.com/asset-projects/token-list/actions/workflows/linkchecker.yml)

<!-- markdown-link-check-enable -->

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
import { getTokenList } from '@asset-projects/token-list';

console.log(getTokenList(1).ERC20);
// [{"chainId": 1, "type": "ERC20", "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "name": "Wrapped BTC", ...}]

console.log(getTokenList(1).ERC721);
// [{"chainId": 1, "type": "ERC721", "address": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85", "name": "Ethereum Name Service", ...}]
```

# Other imports

```ts
import { tokens } from '@asset-projects/token-list';

console.log(tokens().filter((token) => token.chainId === 1 && token.symbol === 'DAI'));
// [
//   {
//     chainId: 1,
//     type: 'ERC20',
//     address: '0x6b175474e89094c44da98b954eedeac495271d0f',
//     name: 'Dai Stablecoin',
//     symbol: 'DAI',
//     decimals: 18,
//     logoURI: 'https://raw.githubusercontent.com/asset-projects/token-list/main/public/dai.png'
//   }
// ]

console.log(
  tokens().filter(
    (token) =>
      token.chainId === 1 && token.address === '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85', // ENS
  ),
);
// [
//   {
//     chainId: 1,
//     type: 'ERC721',
//     address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
//     name: 'Ethereum Name Service',
//     symbol: 'ENS',
//     logoURI: ''
//   }
// ]
```

## References

This project was created with reference to [uniswap/default-token-list](https://github.com/Uniswap/default-token-list) and [trustWallet/assets](https://github.com/trustwallet/assets).

It was created because these projects lacked resources for L2 contract addresses such as optimism and arbitrum.

Respect to these projects!

## License

MIT

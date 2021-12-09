# @asset-projects/token-list

[![npm](https://img.shields.io/npm/v/@asset-projects/token-list)](https://unpkg.com/@asset-projects/token-list@latest/)

This library maintains a list of ERC20 tokens that exist on the ethereum mainnet, L2 and sidechain.

It manages the main tokens and the top 100 or so tokens.

Support for Ethereum mainnet, optimism, arbitrum, polygon, and Other chains will be supported in the future.

##　 Install on your project

```zsh
  # npm
  npm i @asset-projects/token-list

  # yarn
  yarn add @asset-projects/token-list
```

# How to Use

```tsx
import { tokenList } from '@asset-projects/token-list';

const App: React.VFC = () => {
  return (
    <ul>
      {tokenList().erc20.mainnet.map((item) => (
        <li key={item.address}>
          <span>chainId: {item.chainId}</span>
          <span>address: {item.address}</span>
          <span>name: {item.name}</span>
          <span>symbol: {item.symbol}</span>
          <span>address: {item.address}</span>
          <span>decimals: {item.decimals}</span>
          <img src={item.logoURI} />
        </li>
      ))}
    </ul>
  );
};
```

## References

This project was created with reference to [uniswap/default-token-list](https://github.com/Uniswap/default-token-list) and [trustWallet/assets](https://github.com/trustwallet/assets).

It was created because these projects lacked resources for L2 contract addresses such as optimism and arbitrum.

Respect to these projects!

export * from './types';

/** ERC20 */
import EthereumERC20Tokens from './tokens/erc20/mainnet.json';
import OptimisticEthereumERC20Tokens from './tokens/erc20/optimistic-ethereum.json';
import ArbitrumERC20Tokens from './tokens/erc20/arbitrum.json';
import PolygonERC20Tokens from './tokens/erc20/polygon.json';
import BinanceSmartChainMainnnetERC20Tokens from './tokens/erc20/binance-smart-chain-mainnet.json';
import RopstenERC20Tokens from './tokens/erc20/ropsten.json';
import KovanERC20Tokens from './tokens/erc20/ropsten.json';
import RinkebyERC20Tokens from './tokens/erc20/rinkeby.json';
import GoerliERC20Tokens from './tokens/erc20/goerli.json';
import ArbitrumTestNetworkERC20Tokens from './tokens/erc20/arbitrum-testnet-rinkeby.json';
import OptimisticEthereumKovanERC20Tokens from './tokens/erc20/optimistic-ethereum-kovan.json';
import AvalancheERC20Tokens from './tokens/erc20/avalanche.json';

/** ERC721 */
import EthereumNonFungibleTokens from './tokens/erc721/mainnet.json';
import OptimisticEthereumNonFungibleTokens from './tokens/erc721/optimistic-ethereum.json';
import ArbitrumNonFungibleTokens from './tokens/erc721/arbitrum.json';
import PolygonNonFungibleTokens from './tokens/erc721/polygon.json';

export const getTokenList = (chainId: number) => {
  switch (chainId) {
    case 1:
      return {
        ERC20: EthereumERC20Tokens,
        ERC721: EthereumNonFungibleTokens,
      };
    case 3:
      return {
        ERC20: RopstenERC20Tokens,
        ERC721: [],
      };
    case 4:
      return {
        ERC20: RinkebyERC20Tokens,
        ERC721: [],
      };
    case 5:
      return {
        ERC20: GoerliERC20Tokens,
        ERC721: [],
      };
    case 42:
      return {
        ERC20: KovanERC20Tokens,
        ERC721: [],
      };
    case 10:
      return {
        ERC20: OptimisticEthereumERC20Tokens,
        ERC721: OptimisticEthereumNonFungibleTokens,
      };
    case 69:
      return {
        ERC20: OptimisticEthereumKovanERC20Tokens,
        ERC721: [],
      };
    case 42161:
      return {
        ERC20: ArbitrumERC20Tokens,
        ERC721: ArbitrumNonFungibleTokens,
      };
    case 421611:
      return {
        ERC20: ArbitrumTestNetworkERC20Tokens,
        ERC721: [],
      };
    case 137:
      return {
        ERC20: PolygonERC20Tokens,
        ERC721: PolygonNonFungibleTokens,
      };
    case 56:
      return {
        ERC20: BinanceSmartChainMainnnetERC20Tokens,
        ERC721: [],
      };
    case 43114:
      return {
        ERC20: AvalancheERC20Tokens,
        ERC721: [],
      };
    default:
      return undefined;
  }
};

export const tokens = () => {
  return [
    ...EthereumERC20Tokens,
    ...EthereumNonFungibleTokens,
    ...OptimisticEthereumERC20Tokens,
    ...OptimisticEthereumNonFungibleTokens,
    ...ArbitrumERC20Tokens,
    ...ArbitrumNonFungibleTokens,
    ...PolygonERC20Tokens,
    ...PolygonNonFungibleTokens,
    ...BinanceSmartChainMainnnetERC20Tokens,
    ...AvalancheERC20Tokens,
  ];
};

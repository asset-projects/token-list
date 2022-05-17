export type { ERC20Token, ERC721Token } from './types';
import {
  MAINNET,
  OPTIMISTIC_ETHEREUM,
  ARBITRUM,
  POLYGON,
  BINANCE_SMART_CHAIN,
  ROPSTEN,
  KOVAN,
  RINKEBY,
  GOERLI,
  ARBITRUM_TEST_NETWORK,
  OPTIMISTIC_ETHEREUM_KOVAN,
  AVALANCHE,
} from './parts';

export const getTokenList = (chainId: number) => {
  switch (chainId) {
    case 1:
      return MAINNET;
    case 3:
      return ROPSTEN;
    case 4:
      return RINKEBY;
    case 5:
      return GOERLI;
    case 42:
      return KOVAN;
    case 10:
      return OPTIMISTIC_ETHEREUM;
    case 69:
      return OPTIMISTIC_ETHEREUM_KOVAN;
    case 42161:
      return ARBITRUM;
    case 421611:
      return ARBITRUM_TEST_NETWORK;
    case 137:
      return POLYGON;
    case 56:
      return BINANCE_SMART_CHAIN;
    case 43114:
      return AVALANCHE;
    default:
      return undefined;
  }
};

export const getAllTokens = () => {
  return {
    ...MAINNET,
    ...OPTIMISTIC_ETHEREUM,
    ...ARBITRUM,
    ...POLYGON,
    ...BINANCE_SMART_CHAIN,
    ...AVALANCHE,
  };
};

export {
  MAINNET,
  OPTIMISTIC_ETHEREUM,
  ARBITRUM,
  POLYGON,
  BINANCE_SMART_CHAIN,
  AVALANCHE,
  ROPSTEN,
  KOVAN,
  RINKEBY,
  GOERLI,
  ARBITRUM_TEST_NETWORK,
  OPTIMISTIC_ETHEREUM_KOVAN,
};

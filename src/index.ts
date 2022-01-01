import type { EthereumTokenList } from './types';
export type {
  ERC20Token,
  ERC721Token,
  ERC20TokenList,
  ERC721TokenList,
  MainNetworkList,
  TestNetworkList,
  NetworkList,
} from './types';
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
} from './parts';

export const tokenList = (): EthereumTokenList => ({
  mainnet: MAINNET,
  'optimistic-ethereum': OPTIMISTIC_ETHEREUM,
  arbitrum: ARBITRUM,
  polygon: POLYGON,
  'binance-smart-chain': BINANCE_SMART_CHAIN,
  ropsten: ROPSTEN,
  kovan: KOVAN,
  rinkeby: RINKEBY,
  goerli: GOERLI,
  'arbitrum-test-rinkeby': ARBITRUM_TEST_NETWORK,
  'optimistic-ethereum-kovan': OPTIMISTIC_ETHEREUM_KOVAN,
});

export {
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
};

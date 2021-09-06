import Mainnet from './tokens/mainnet.json';
import Optimism from './tokens/optimism.json';
import type { EthereumTokenList } from './types';

export const tokenList = (): EthereumTokenList => {
  return {
    mainnet: Mainnet,
    optimism: Optimism,
  };
};

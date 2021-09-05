import Mainnet from './tokens/mainnet.json';
import type { EthereumTokenList } from './types';

export const tokenList = (): EthereumTokenList => {
  return {
    mainnet: Mainnet,
  };
};

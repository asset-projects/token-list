import Mainnet from './tokens/mainnet.json';
import Optimism from './tokens/optimism.json';
import Polygon from './tokens/polygon.json';
import type { EthereumTokenList } from './types';

export const tokenList = (): EthereumTokenList => {
  return {
    mainnet: Mainnet,
    optimism: Optimism,
    polygon: Polygon,
  };
};

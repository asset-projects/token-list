import Mainnet from './tokens/mainnet.json';
import Optimism from './tokens/optimism.json';
import Arbitrum from './tokens/arbitrum.json';
import Polygon from './tokens/polygon.json';
import type { TokenMap } from './types';

export const tokenList = (): TokenMap => ({
  erc20: {
    mainnet: Mainnet,
    optimism: Optimism,
    arbitrum: Arbitrum,
    polygon: Polygon,
  },
});

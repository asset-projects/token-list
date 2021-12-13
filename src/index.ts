import Mainnet from './tokens/mainnet.json';
import Optimism from './tokens/optimistic-ethereum.json';
import Arbitrum from './tokens/arbitrum.json';
import Polygon from './tokens/polygon.json';
import Ropsten from './tokens/ropsten.json';
import Kovan from './tokens/ropsten.json';
import Rinkeby from './tokens/rinkeby.json';
import Goerli from './tokens/goerli.json';
import type { TokenMap } from './types';

export const tokenList = (): TokenMap => ({
  erc20: {
    mainnet: Mainnet,
    'optimistic-ethereum': Optimism,
    arbitrum: Arbitrum,
    polygon: Polygon,

    // Test Network
    ropsten: Ropsten,
    kovan: Kovan,
    rinkeby: Rinkeby,
    goerli: Goerli,
  },
});

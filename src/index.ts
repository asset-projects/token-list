import Mainnet from './tokens/mainnet.json';
import Optimism from './tokens/optimistic-ethereum.json';
import Arbitrum from './tokens/arbitrum.json';
import Polygon from './tokens/polygon.json';
import BinanceSmartChainMainnnet from './tokens/binance-smart-chain-mainnet.json';
import Ropsten from './tokens/ropsten.json';
import Kovan from './tokens/ropsten.json';
import Rinkeby from './tokens/rinkeby.json';
import Goerli from './tokens/goerli.json';
import ArbitrumTestNetwork from './tokens/arbitrum-testnet-rinkeby.json';
import OptimisticEthereumKovan from './tokens/optimistic-ethereum-kovan.json';
import type { TokenMap } from './types';

export const tokenList = (): TokenMap => ({
  erc20: {
    mainnet: Mainnet,
    'optimistic-ethereum': Optimism,
    arbitrum: Arbitrum,
    polygon: Polygon,
    'binance-smart-chain': BinanceSmartChainMainnnet,

    // Test Network
    ropsten: Ropsten,
    kovan: Kovan,
    rinkeby: Rinkeby,
    goerli: Goerli,
    'arbitrum-test-rinkeby': ArbitrumTestNetwork,
    'optimistic-ethereum-kovan': OptimisticEthereumKovan,
  },
});

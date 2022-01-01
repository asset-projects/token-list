/** ERC20 */
import MainnetERC20Tokens from './tokens/erc20/mainnet.json';
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

/** ERC721 */
import MainnetERC721Tokens from './tokens/erc721/mainnet.json';
import OptimistiEthereumERC721Tokens from './tokens/erc721/optimistic-ethereum.json';
import ArbitrumERC721Tokens from './tokens/erc721/arbitrum.json';
import PolygonERC721Tokens from './tokens/erc721/polygon.json';

export const MAINNET = {
  ERC20: MainnetERC20Tokens,
  ERC721: MainnetERC721Tokens,
};
export const OPTIMISTIC_ETHEREUM = {
  ERC20: OptimisticEthereumERC20Tokens,
  ERC721: OptimistiEthereumERC721Tokens,
};
export const ARBITRUM = {
  ERC20: ArbitrumERC20Tokens,
  ERC721: ArbitrumERC721Tokens,
};
export const POLYGON = {
  ERC20: PolygonERC20Tokens,
  ERC721: PolygonERC721Tokens,
};
export const BINANCE_SMART_CHAIN = {
  ERC20: BinanceSmartChainMainnnetERC20Tokens,
  ERC721: [],
};

export const ROPSTEN = {
  ERC20: RopstenERC20Tokens,
  ERC721: [],
};
export const KOVAN = {
  ERC20: KovanERC20Tokens,
  ERC721: [],
};
export const RINKEBY = {
  ERC20: RinkebyERC20Tokens,
  ERC721: [],
};
export const GOERLI = {
  ERC20: GoerliERC20Tokens,
  ERC721: [],
};
export const ARBITRUM_TEST_NETWORK = {
  ERC20: ArbitrumTestNetworkERC20Tokens,
  ERC721: [],
};
export const OPTIMISTIC_ETHEREUM_KOVAN = {
  ERC20: OptimisticEthereumKovanERC20Tokens,
  ERC721: [],
};

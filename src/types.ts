type Token = {
  chainId: number;
  type: string;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};
type TokenList = Token[];

export type MainNetworkList = [
  'mainnet',
  'optimistic-ethereum',
  'arbitrum',
  'polygon',
  'binance-smart-chain',
];
export type TestNetworkList = [
  'ropsten',
  'kovan',
  'rinkeby',
  'goerli',
  'optimistic-ethereum-kovan',
  'arbitrum-test-rinkeby',
];
export type NetworkList = [...MainNetworkList, ...TestNetworkList];

export type EthereumTokenList = {
  [key in NetworkList[number]]: TokenList;
};

export type TokenMap = {
  erc20: EthereumTokenList;
};

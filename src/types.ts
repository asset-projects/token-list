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

export type EthereumTokenList = {
  mainnet: TokenList;
  optimism: TokenList;
  arbitrum: TokenList;
  polygon: TokenList;

  // Test Network
  ropsten: TokenList;
  kovan: TokenList;
  rinkeby: TokenList;
  goerli: TokenList;
};

export type TokenMap = {
  erc20: EthereumTokenList;
};

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
  [key: string]: TokenList;
};

export type TokenMap = {
  erc20: EthereumTokenList;
};

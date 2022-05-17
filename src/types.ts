export type ERC20Token = {
  chainId: number;
  type: string;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};

export type ERC721Token = {
  chainId: number;
  type: string;
  address: string;
  name: string;
  symbol: string;
  logoURI: string;
};

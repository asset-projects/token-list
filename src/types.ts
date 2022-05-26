export type FungibleToken = {
  chainId: number;
  type: string;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};

export type NonFungibleToken = {
  chainId: number;
  type: string;
  address: string;
  name: string;
  symbol: string;
  logoURI: string;
};

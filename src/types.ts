export type FungibleToken = {
  chainId: number;
  type: 'ERC20';
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};

export type NonFungibleToken = {
  chainId: number;
  type: 'ERC721' | 'ERC1155';
  address: string;
  name: string;
  symbol: string;
  logoURI: string;
};

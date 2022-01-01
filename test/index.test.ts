import { tokenList } from '../src';

describe('tokenList', () => {
  it('Does the data exist?', () => {
    expect(tokenList()).toBeDefined();
  });

  it('mainnet', () => {
    expect(tokenList().mainnet.ERC20).toBeDefined();
    expect(tokenList().mainnet.ERC721).toBeDefined();
  });

  it('optimistic-ethereum', () => {
    expect(tokenList()['optimistic-ethereum'].ERC20).toBeDefined();
    expect(tokenList()['optimistic-ethereum'].ERC721).toBeDefined();
  });

  it('arbitrum', () => {
    expect(tokenList().arbitrum.ERC20).toBeDefined();
    expect(tokenList().arbitrum.ERC721).toBeDefined();
  });

  it('polygon', () => {
    expect(tokenList()['binance-smart-chain'].ERC20).toBeDefined();
    expect(tokenList().polygon.ERC721).toBeDefined();
  });

  it('binance', () => {
    expect(tokenList()['binance-smart-chain'].ERC20).toBeDefined();
    expect(tokenList()['binance-smart-chain'].ERC721).toHaveLength(0);
  });

  // Test Network
  it('ropsten', () => {
    expect(tokenList().ropsten.ERC20).toBeDefined();
    expect(tokenList().ropsten.ERC721).toHaveLength(0);
  });

  it('kovan', () => {
    expect(tokenList().kovan.ERC20).toBeDefined();
    expect(tokenList().kovan.ERC721).toHaveLength(0);
  });

  it('rinkeby', () => {
    expect(tokenList().rinkeby.ERC20).toBeDefined();
    expect(tokenList().rinkeby.ERC721).toHaveLength(0);
  });

  it('goerli', () => {
    expect(tokenList().goerli.ERC20).toBeDefined();
    expect(tokenList().goerli.ERC721).toHaveLength(0);
  });

  it('arbitrum-test-rinkeby', () => {
    expect(tokenList()['arbitrum-test-rinkeby'].ERC20).toBeDefined();
    expect(tokenList()['arbitrum-test-rinkeby'].ERC721).toHaveLength(0);
  });

  it('optimistic-ethereum-kovan', () => {
    expect(tokenList()['optimistic-ethereum-kovan'].ERC20).toBeDefined();
    expect(tokenList()['optimistic-ethereum-kovan'].ERC721).toHaveLength(0);
  });
});

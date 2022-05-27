import { tokens, getTokenList } from '../src';

describe('Test', () => {
  it('result', () => {
    expect(getTokenList(1)).toBeDefined();
    expect(tokens()).toBeDefined();

    // Does not exist.
    expect(getTokenList(111)).toBeUndefined();
  });

  it('mainnet', () => {
    const token = getTokenList(1);
    expect(token.ERC20).toBeDefined();
    expect(token.ERC721).toBeDefined();
  });

  it('optimistic-ethereum', () => {
    const token = getTokenList(10);
    expect(token.ERC20).toBeDefined();
    expect(token.ERC721).toBeDefined();
  });

  it('arbitrum', () => {
    const token = getTokenList(42161);
    expect(token.ERC20).toBeDefined();
    expect(token.ERC721).toBeDefined();
  });

  it('polygon', () => {
    const token = getTokenList(137);
    expect(token.ERC20).toBeDefined();
    expect(token.ERC721).toBeDefined();
  });

  it('binance', () => {
    const token = getTokenList(56);
    expect(token.ERC20).toBeDefined();
    expect(token.ERC721).toHaveLength(0);
  });

  it('avalanche', () => {
    const token = getTokenList(43114);
    expect(token.ERC20).toBeDefined();
    expect(token.ERC721).toHaveLength(0);
  });

  // Test Network
  it('ropsten', () => {
    const token = getTokenList(3);
    expect(token.ERC20).toHaveLength(0);
    expect(token.ERC721).toHaveLength(0);
  });

  it('kovan', () => {
    const token = getTokenList(42);
    expect(token.ERC20).toHaveLength(0);
    expect(token.ERC721).toHaveLength(0);
  });

  it('rinkeby', () => {
    const token = getTokenList(4);
    expect(token.ERC20).toHaveLength(0);
    expect(token.ERC721).toHaveLength(0);
  });

  it('goerli', () => {
    const token = getTokenList(5);
    expect(token.ERC20).toHaveLength(0);
    expect(token.ERC721).toHaveLength(0);
  });

  it('arbitrum-test-rinkeby', () => {
    const token = getTokenList(421611);
    expect(token.ERC20).toHaveLength(0);
    expect(token.ERC721).toHaveLength(0);
  });

  it('optimistic-ethereum-kovan', () => {
    const token = getTokenList(69);
    expect(token.ERC20).toHaveLength(0);
    expect(token.ERC721).toHaveLength(0);
  });
});

import { tokenList } from '../src';

describe('tokenList', () => {
  it('Does the data exist?', () => {
    expect(tokenList()).toBeDefined();
  });

  it('mainnet', () => {
    expect(tokenList().mainnet.ERC20).toBeDefined();
  });

  it('optimistic-ethereum', () => {
    expect(tokenList()['optimistic-ethereum'].ERC20).toBeDefined();
  });

  it('arbitrum', () => {
    expect(tokenList().arbitrum.ERC20).toBeDefined();
  });

  it('polygon', () => {
    expect(tokenList()['binance-smart-chain'].ERC20).toBeDefined();
  });

  // Test Network
  it('ropsten', () => {
    expect(tokenList().ropsten.ERC20).toBeDefined();
  });

  it('kovan', () => {
    expect(tokenList().kovan.ERC20).toBeDefined();
  });

  it('rinkeby', () => {
    expect(tokenList().rinkeby.ERC20).toBeDefined();
  });

  it('goerli', () => {
    expect(tokenList().goerli.ERC20).toBeDefined();
  });

  it('arbitrum-test-rinkeby', () => {
    expect(tokenList()['arbitrum-test-rinkeby'].ERC20).toBeDefined();
  });

  it('optimistic-ethereum-kovan', () => {
    expect(tokenList()['optimistic-ethereum-kovan'].ERC20).toBeDefined();
  });
});

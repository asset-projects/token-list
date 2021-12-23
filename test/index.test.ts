import { tokenList } from '../src';

describe('tokenList', () => {
  it('Does the data exist?', () => {
    expect(tokenList()).toBeDefined();
  });

  it('mainnet', () => {
    expect(tokenList().erc20.mainnet).toBeDefined();
  });

  it('optimistic-ethereum', () => {
    expect(tokenList().erc20['optimistic-ethereum']).toBeDefined();
  });

  it('arbitrum', () => {
    expect(tokenList().erc20.arbitrum).toBeDefined();
  });

  it('polygon', () => {
    expect(tokenList().erc20['binance-smart-chain']).toBeDefined();
  });

  // Test Network
  it('ropsten', () => {
    expect(tokenList().erc20.ropsten).toBeDefined();
  });

  it('kovan', () => {
    expect(tokenList().erc20.kovan).toBeDefined();
  });

  it('rinkeby', () => {
    expect(tokenList().erc20.rinkeby).toBeDefined();
  });

  it('goerli', () => {
    expect(tokenList().erc20.goerli).toBeDefined();
  });

  it('arbitrum-test-rinkeby', () => {
    expect(tokenList().erc20['arbitrum-test-rinkeby']).toBeDefined();
  });

  it('optimistic-ethereum-kovan', () => {
    expect(tokenList().erc20['optimistic-ethereum-kovan']).toBeDefined();
  });
});

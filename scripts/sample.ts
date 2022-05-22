import { tokens } from '../src';

const main = () => {
  console.log(
    tokens().filter(
      (token) =>
        token.chainId === 1 && token.address === '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    ),
  );
};

main();

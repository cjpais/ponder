// https://github.com/graphprotocol/graph-cli/blob/main/src/protocols/index.js#L40
// https://chainlist.org/
const chainIdByGraphNetwork: Record<string, number | undefined> = {
  mainnet: 1,
  kovan: 42,
  rinkeby: 4,
  ropsten: 3,
  goerli: 5,
  "poa-core": 99,
  "poa-sokol": 77,
  xdai: 100,
  matic: 137,
  mumbai: 80001,
  fantom: 250,
  "fantom-testnet": 4002,
  bsc: 56,
  chapel: -1,
  clover: 0,
  avalanche: 43114,
  fuji: 43113,
  celo: 42220,
  "celo-alfajores": 44787,
  fuse: 122,
  moonbeam: 1284,
  moonriver: 1285,
  mbase: -1,
  "arbitrum-one": 42161,
  "arbitrum-rinkeby": 421611,
  optimism: 10,
  "optimism-kovan": 69,
  aurora: 1313161554,
  "aurora-testnet": 1313161555,
};

export const getGraphProtocolChainId = (networkName: string) => {
  return chainIdByGraphNetwork[networkName];
};

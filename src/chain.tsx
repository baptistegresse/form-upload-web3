import { Chain } from "@wagmi/core";

export const filecoinTestNet = {
  id: 314159,
  name: "Filecoin Calibration testnet",
  network: "filecoin",
  nativeCurrency: {
    decimals: 18,
    name: "Filecoin testnet",
    symbol: "tFIL",
  },
  rpcUrls: {
    public: { http: ["https://api.calibration.node.glif.io/rpc/v0"] },
    default: { http: ["https://api.calibration.node.glif.io/rpc/v0"] },
  },
  blockExplorers: {
    etherscan: { name: "Filscan", url: "https://calibration.filscan.io/" },
    default: { name: "Filscan", url: "https://calibration.filscan.io/" },
  },
  //   contracts: {
  //     multicall3: {
  //       address: "0xca11bde05977b3631167028862be2a173976ca11",
  //       blockCreated: 11_907_934,
  //     },
  //   },
} as const satisfies Chain;
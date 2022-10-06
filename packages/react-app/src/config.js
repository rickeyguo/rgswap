import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x66d7c7B1FBF186D40a2DFa5208cC8cad504527A8";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/grWxILT7whWxYlwrjt9FI0J2uyMSfpr4",
  },
};

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require ('dotenv').config()

const { 
  ALCHEMY_SEPOLIA_API_KEY_URL, 
  ACCOUNT_PRIVATE_KEY, 
  ETHERSCAN_API_KEY, 
  ALCHEMY_BASE_API_KEY_URL,
} = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_API_KEY_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    BASE: {
      url: ALCHEMY_BASE_API_KEY_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  sourcify: {
    enabled: false
  }
};

export default config;
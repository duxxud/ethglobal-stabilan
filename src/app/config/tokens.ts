import {
  Address0x,
  AvailableChains,
  contractAddressesByChain,
} from "./Contract-Addresses";

import { Icons } from "lib";

export type AvailableTokens = "USDC" | "USDT" | "Gho" | "Dai";

export const tokens = [
  {
    name: "USDC",
    icon: Icons.tokenUsdc,
    sepolia: { address: contractAddressesByChain.sepolia.USDC },
    polygonZkevmTestnet: {
      address: contractAddressesByChain.polygonZkevmTestnet.USDC,
    },
    base: { address: contractAddressesByChain.base.USDC },
  },
  {
    name: "USDT",
    icon: Icons.tokenUsdt,
    sepolia: { address: contractAddressesByChain.sepolia.USDT },
    base: { address: contractAddressesByChain.base.USDT },
    polygonZkevmTestnet: {
      address: contractAddressesByChain.polygonZkevmTestnet.USDT,
    },
  },
  {
    name: "Gho",
    icon: Icons.tokenGho,
    sepolia: { address: contractAddressesByChain.sepolia.GHO },
    base: { address: contractAddressesByChain.base.GHO },
    polygonZkevmTestnet: {
      address: contractAddressesByChain.polygonZkevmTestnet.GHO,
    },
  },
  {
    name: "Dai",
    icon: Icons.tokenDai,
    sepolia: { address: contractAddressesByChain.sepolia.DAI },
    base: { address: contractAddressesByChain.base.DAI },
    polygonZkevmTestnet: {
      address: contractAddressesByChain.polygonZkevmTestnet.DAI,
    },
  },
];

/**
 * Retrieves the contract address for a given token and network.
 *
 * @param {string} tokenName - The name of the token.
 * @param {string} networkName - The name of the network.
 * @returns {string | undefined} The contract address of the token on the specified network, or undefined if not found.
 *
 * @example
 * // Assuming 'USDC' token and 'sepolia' network are valid and exist in the tokens array
 * getAddressByTokenAndNetwork('USDC', 'sepolia'); // returns the contract address of USDC on the Sepolia network
 *
 * @example
 * // Returns undefined if the token or network name is not found
 * getAddressByTokenAndNetwork('NonExistentToken', 'sepolia'); // undefined
 * getAddressByTokenAndNetwork('USDC', 'NonExistentNetwork'); // undefined
 */
export function getAddressByTokenAndNetwork(
  tokenName: string | undefined,
  networkName: string | undefined
): Address0x | undefined {
  // Find the token in the array
  const token = tokens.find((token) => token.name === tokenName);
  console.log({ token });

  if (!token) {
    console.error(`Token ${tokenName} not found.`);
    return undefined;
  }

  // Extract the address for the specified network
  const address = token[networkName as AvailableChains]?.address;

  if (!address) {
    console.error(
      `Address for ${networkName} not found for token ${tokenName}.`
    );
    return undefined;
  }

  return address;
}

export function findTokenByAddress(
  address: Address0x,
  networkName: string
): { name: string; icon: string } | undefined {
  const networkKey = networkName as AvailableChains; // Cast to AvailableChains type
  return tokens.find((token) => token[networkKey]?.address === address);
}

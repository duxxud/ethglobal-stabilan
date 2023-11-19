"use client";

// Import the necessary types from wagmi
import { WagmiConfig } from "wagmi";

// Your existing imports
import { defaultWagmiConfig } from "@web3modal/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { arbitrum, mainnet } from "viem/chains";
// import { wagmiConfig as rawWagmiConfig } from "lib/scaffold-lib/services/web3/wagmiConfig";

// Your existing setup
const projectId = "YOUR_PROJECT_ID";
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};
const chains = [mainnet, arbitrum];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
// const wagmiConfig = rawWagmiConfig as Config<
//   PublicClient,
//   WebSocketPublicClient
// >;

// Create modal with the correctly typed wagmiConfig
createWeb3Modal({ wagmiConfig: wagmiConfig as any, projectId, metadata });

console.log("first");

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig as any}>{children}</WagmiConfig>;
}

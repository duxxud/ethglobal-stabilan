"use client";

import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Raleway } from "next/font/google";
import { WagmiConfig } from "wagmi";
// Raleway, sans-serif
import "./globals.css";

import { navigationBarConfig } from "../lib";
import { wagmiConfig } from "../lib/scaffold-lib/services/web3/wagmiConfig";
import { appChains } from "../lib/scaffold-lib/services/web3/wagmiConnectors";

import NavBar from "./nav-bar/NavBar";

const raleway = Raleway({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} font-sans full-screen-gradient`}
    >
      <body>
        <NavBar items={navigationBarConfig} />
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={appChains.chains} theme={lightTheme()}>
            <div className="mt-20 md:mt-24 mx-[3%] md:mx-[5%] lg:mx-[7%]">
              {children}
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
      {/* <Toaster /> */}
    </html>
  );
}

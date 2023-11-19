"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { Raleway } from "next/font/google";
import "./globals.css";

import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";

import { navigationBarConfig } from "../lib";

import NavBar from "./nav-bar/NavBar";

import { appChains } from "lib/scaffold-lib/services/web3/wagmiConnectors";
import { wagmiConfig } from "lib/scaffold-lib/services/web3/wagmiConfig";

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
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={appChains.chains} theme={lightTheme()}>
            <NavBar items={navigationBarConfig} />
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

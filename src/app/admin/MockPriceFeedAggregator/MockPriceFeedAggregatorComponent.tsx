"use client";

import { useState } from "react";
import { etherUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

import { Address0x } from "app/config/Contract-Addresses";
import {
  AvailableTokens,
  getAddressByTokenAndNetwork,
  tokens,
} from "app/config/tokens";
import { Button, Card, FlexCol, Icon, InputField, Typography } from "lib";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import { getTargetNetwork } from "lib/scaffold-lib/utils/scaffold-eth";

interface IToken {
  name: string;
  icon: string;
}

export const PriceFeedAdresses = {
  USDCPriceFeed: "0x5575166bE5043Ab5B6043D298Eb66A7C1Ce185Ce" as Address0x,
  USDTPriceFeed: "0x4dd6EA4b4929b8c06D8434A9B9552d92500eE251" as Address0x,
  DaiPriceFeed: "0xbC645ce455EaD9d230fbbe6E2cE2AFf848bD3a58" as Address0x,
  PriceFeedAggregator:
    "0x3e726C563500bC255CB858269D1862cc258491c3" as Address0x,
};

// Function to get the price feed address for a given token
export function getPriceFeedAddressForToken(
  tokenName?: AvailableTokens
): Address0x | undefined {
  if (!tokenName) return undefined;
  const priceFeedMap: { [key in AvailableTokens]?: Address0x } = {
    USDC: PriceFeedAdresses.USDCPriceFeed,
    USDT: PriceFeedAdresses.USDTPriceFeed,
    Dai: PriceFeedAdresses.DaiPriceFeed,
    //gho nema pricefeedaggregator?
    Gho: PriceFeedAdresses.PriceFeedAggregator,
  };

  return priceFeedMap[tokenName];
}

export const MockPriceFeedAggregatorComponent = () => {
  const network = getTargetNetwork();
  const { address } = useAccount();

  const [amount, setAmount] = useState(0);

  const [selectedToken, setSelectedToken] = useState<IToken | undefined>(
    undefined
  );

  const selectToken = (tokenName: string) => {
    const token = tokens.find((t) => t.name === tokenName);
    setSelectedToken(token);
  };

  const { writeAsync: mintAsync, isLoading: isMinting } = useWingsContractWrite(
    {
      contractName: "MockERC20",
      functionName: "mint",
      overrideContractAddress: getPriceFeedAddressForToken(
        selectedToken?.name as AvailableTokens
      ),
      args: [undefined, undefined],
      onSuccess: () => {
        setSelectedToken(undefined);
        setAmount(0);
      },
    }
  );

  return (
    <div>
      <Card>
        <FlexCol className="gap-4 flex-wrap">
          <Typography type="h5">MockPriceFeedAggregator</Typography>
          <div className="flex gap-3">
            {tokens.map((token, index) => (
              <div
                key={index}
                className={`cursor-pointer flex flex-col items-center rounded-2xl p-4 border border-dashed border-[rgba(145,158,171,0.2)] relative ${
                  selectedToken?.name === token.name ? "border-primary" : ""
                }`}
                onClick={() => selectToken(token.name)}
              >
                <div className="min-h-[70px]">
                  <Icon
                    className="rounded-full"
                    src={token.icon}
                    width={55}
                    height={55}
                  />
                </div>
                <div className="flex flex-col gap-3 text-center">
                  <Typography type="body-bold">{token.name}</Typography>
                  <Typography type="meta">Stablecoin</Typography>
                </div>
              </div>
            ))}
          </div>

          <InputField
            name="amount"
            rightLabel="Set price"
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />

          <Button
            className="w-48"
            color="error"
            loading={isMinting}
            disabled={!selectedToken}
            onClick={async () => {
              await mintAsync({
                args: [
                  getAddressByTokenAndNetwork(
                    selectedToken?.name,
                    network.network
                  ),
                  parseUnits(String(amount), etherUnits.wei),
                ],
              });
            }}
          >
            Mint
          </Button>
        </FlexCol>
      </Card>
    </div>
  );
};

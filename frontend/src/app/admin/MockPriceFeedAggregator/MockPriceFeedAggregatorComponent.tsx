"use client";

import { useState } from "react";
import { etherUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

import {
  Address0x,
  AvailableChains,
  contractAddressesByChain,
} from "app/config/Contract-Addresses";
import {
  AvailableTokens,
  getAddressByTokenAndNetwork,
  tokens,
} from "app/config/tokens";
import { Button, Card, FlexCol, Icon, InputField, Typography } from "lib";
import { useWingsContractWrite2 } from "lib/client/hooks/useWingsContractWrite2";
import { getTargetNetwork } from "lib/scaffold-lib/utils/scaffold-eth";

interface IToken {
  name: string;
  icon: string;
}

export const MockPriceFeedAggregatorComponent = () => {
  const network = getTargetNetwork();
  const { address } = useAccount();

  const PriceFeedAdresses = {
    USDCPriceFeed:
      contractAddressesByChain[network.modifiedName as AvailableChains]
        ?.USDCPriceFeed,
    USDTPriceFeed:
      contractAddressesByChain[network.modifiedName as AvailableChains]
        ?.USDTPriceFeed,
    wBTCPriceFeed:
      contractAddressesByChain[network.modifiedName as AvailableChains]
        ?.wBTCPriceFeed,
    INSRDPriceFeed:
      contractAddressesByChain[network.modifiedName as AvailableChains]
        ?.INSRDPriceFeed,
    //gho?
    PriceFeedAggregator:
      contractAddressesByChain[network.modifiedName as AvailableChains]
        ?.PriceFeedAggregator,
  };

  // Function to get the price feed address for a given token
  function getPriceFeedAddressForToken(
    tokenName?: AvailableTokens
  ): Address0x | undefined {
    if (!tokenName) return undefined;
    const priceFeedMap: { [key in AvailableTokens]?: Address0x } = {
      USDC: PriceFeedAdresses.USDCPriceFeed,
      USDT: PriceFeedAdresses.USDTPriceFeed,
      wBTC: PriceFeedAdresses.wBTCPriceFeed,
      INSRD: PriceFeedAdresses.INSRDPriceFeed,
      //gho nema pricefeedaggregator?
      Gho: PriceFeedAdresses.PriceFeedAggregator,
    };

    return priceFeedMap[tokenName];
  }

  const [amount, setAmount] = useState(0);

  const [selectedToken, setSelectedToken] = useState<IToken | undefined>(
    undefined
  );

  const selectToken = (tokenName: string) => {
    const token = tokens.find((t) => t.name === tokenName);
    setSelectedToken(token);
  };

  const { writeAsync: mintAsync, isLoading: isMinting } =
    useWingsContractWrite2({
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
    });

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
                  <Typography type="meta">
                    {token.name === "WBTC" ? <>Bitcoin</> : <>Stablecoin</>}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          <InputField
            name="amount"
            rightLabel="Set price"
            value={amount}
            type="number"
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
                    network.modifiedName
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

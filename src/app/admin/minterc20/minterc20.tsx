"use client";

import { useState } from "react";
import { etherUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

import { Address0x } from "app/config/Contract-Addresses";
import { getAddressByTokenAndNetwork, tokens } from "app/config/tokens";
import { Button, Card, FlexCol, Icon, InputField, Typography } from "lib";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import { getTargetNetwork } from "lib/scaffold-lib/utils/scaffold-eth";

interface IToken {
  name: string;
  icon: string;
}

export const Minterc20 = () => {
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
      overrideContractAddress: selectedToken
        ? getAddressByTokenAndNetwork(selectedToken.name, network.modifiedName)
        : undefined,
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
          <Typography type="h5">minterc20</Typography>
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
            rightLabel="Amount"
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
                  address as Address0x,
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

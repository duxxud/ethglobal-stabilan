"use client";

import { useState } from "react";
import { CheckmarkIcon } from "react-hot-toast";
import { etherUnits, formatUnits, parseUnits } from "viem";

import {
  Button,
  Card,
  Divider,
  FlexCol,
  FlexRow,
  Icon,
  InputFieldS,
  Typography,
} from "../../lib";
import { InputSliderFieldS } from "../../lib/components/form/input-stabilan/InputSliderField/InputSliderField";

import { getAddressByTokenAndNetwork, tokens } from "app/config/tokens";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import { getTargetNetwork } from "lib/scaffold-lib/utils/scaffold-eth";
import { getDateAsLastDayOfTheMonth } from "lib/utils/date/find-last-day-of-the-month";

interface IToken {
  name: string;
  icon: string;
}
{
  /* <CheckmarkIcon className="absolute top-0 right-0 h-6 w-6 text-green-500" /> */
}

export default function Page() {
  const network = getTargetNetwork();

  const [months, setMonths] = useState(1);
  const [amount, setAmount] = useState(0);
  const [selectedToken, setSelectedToken] = useState<IToken | undefined>(
    undefined
  );

  const selectToken = (token: IToken) => {
    setSelectedToken(token);
  };

  // ------------- Contract ---------- //
  const getAssetAPY = 1n;
  // const { data: getAssetAPY } = useWingsContractRead({
  //   contractName: "StabilanCore",
  //   functionName: "getAssetAPY",
  //   args: [getAddressByTokenAndNetwork(selectedToken?.name, network.network)],
  // });

  const { writeAsync: backAsync, isLoading: isBacking } = useWingsContractWrite(
    {
      contractName: "StabilanCore",
      functionName: "backing",
      args: [undefined, undefined, undefined],
    }
  );

  const submitAsync = async () => {
    await backAsync({
      args: [
        getAddressByTokenAndNetwork(selectedToken?.name, network.network),
        parseUnits(String(amount), etherUnits.wei),
        BigInt(months),
      ],
      onSuccess: () => resetForm(),
    });
  };

  const resetForm = () => {
    setAmount(0);
    setMonths(1);
    setSelectedToken(undefined);
  };

  return (
    <div className="flex flex-col gap-5">
      <FlexCol className="mb-12 gap-5">
        <Typography type="h2">Back asset</Typography>
        <Typography type="meta">
          <strong>Select Token </strong>& Enter the amount you want to cover and
          for how long.
        </Typography>
      </FlexCol>

      <div className="flex flex-wrap gap-3">
        {tokens.map((token, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col flex-grow items-center rounded-2xl p-4 border border-dashed border-[rgba(145,158,171,0.2)] relative"
            onClick={() => selectToken(token)}
          >
            {selectedToken?.name === token.name && (
              <CheckmarkIcon
                style={{
                  position: "absolute",
                  left: "185px",
                  top: "50px",
                }}
                className="h-6 w-6 text-primary z-10"
              />
            )}
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

      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-8 col-span-12 gap-12 flex flex-col">
          <Card size="big">
            <Typography type="h5">Quote details</Typography>
            <br />
            <div className="flex flex-col gap-12">
              <Typography type="body-regular">
                This product covers any token or combination of tokens you have
                in the Protocol. In case of a claim, you`ll receive the
                equivalent of your lost funds in ETH up to the covered amount.
                Alternatively you can select DAI.
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <InputSliderFieldS
                    label={<Typography type="body-bold">Duration</Typography>}
                    rightLabel={
                      <Typography type="h6" className="text-info">
                        Months
                      </Typography>
                    }
                    value={months}
                    name="months"
                    min={1}
                    max={6}
                    onChange={(e) => {
                      const newValue = Number(e.target.value);
                      setMonths(newValue > 6 ? 6 : newValue);
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <InputFieldS
                    label={<Typography type="body-bold">Amount</Typography>}
                    rightLabel={
                      <Typography type="h6" className="text-info">
                        ETH
                      </Typography>
                    }
                    value={amount}
                    name="amount"
                    onChange={(e: any) => {
                      setAmount(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card size="big">
            <Typography type="h5">Terms and conditions</Typography>
            <br />
            <Typography type="body-regular">
              Protocol Cover protects against: Smart contract code being used in
              an unintended way (e.g., exploit, hack) Sudden and severe economic
              events (e.g., oracle manipulation, governance attacks) Exclusions
              that apply but are not limited to: Losses due to rug pulls Losses
              from the de-peg of any asset that the Designated Protocol
              generates Losses due to a previously disclosed vulnerability Cover
              applies to all EVM-compatible networks Deductible 5% of the Cover
              Amount Claims filing: You must provide proof of loss when
              submitting your claim You need to wait 14 days after the loss
              event, so claims assessors have the resources to make a decision
              If your cover was active when the loss event occurred, you can
              file a claim up to 35 days after the cover period expires This
              cover is not a contract of insurance. Cover is provided on a
              discretionary basis with Nexus Mutual members having the final say
              on which claims are paid. Read the complete cover wording here.
            </Typography>
          </Card>
        </div>
        <div className="md:col-span-4 col-span-12">
          <Card size="big">
            {selectedToken === undefined && (
              <FlexCol className="gap-6">
                <Typography type="h5">Summary</Typography>
                <Typography type="meta">Please select token</Typography>
              </FlexCol>
            )}
            {selectedToken && (
              <FlexCol className="gap-6">
                <Typography type="h5">Summary</Typography>
                <FlexRow className="gap-3 items-center">
                  <Icon
                    className="rounded-full"
                    src={selectedToken.icon}
                    width={64}
                    height={64}
                  />
                  <FlexCol className="gap-3">
                    <Typography type="body-bold">
                      {selectedToken.name}
                    </Typography>
                    <Typography type="meta">Stablecoin</Typography>
                  </FlexCol>
                </FlexRow>
                <Divider />
                <FlexRow className="justify-between">
                  <Typography>Pay in:</Typography>
                  <Typography type="body-bold" className="text-info">
                    ETH
                  </Typography>
                </FlexRow>
                <FlexRow className="justify-between">
                  <Typography>Until:</Typography>
                  <Typography type="body-bold" className="text-info">
                    {getDateAsLastDayOfTheMonth({
                      numberOfMonths: months,
                    }).toDateString()}
                  </Typography>
                </FlexRow>
                <FlexRow className="justify-between">
                  <Typography>You`ll invest:</Typography>
                  <Typography type="body-bold" className="text-info">
                    {amount}
                  </Typography>
                </FlexRow>
                <FlexRow className="justify-between">
                  <Typography>APY:</Typography>
                  <Typography type="body-bold" className="text-info">
                    {formatUnits(getAssetAPY, etherUnits.wei)}
                  </Typography>
                </FlexRow>
                <Divider />

                <Button
                  color="success"
                  size="big"
                  onClick={submitAsync}
                  loading={isBacking}
                >
                  Pay
                </Button>
              </FlexCol>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

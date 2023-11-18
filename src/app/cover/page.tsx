"use client";

import { useState } from "react";

import { Card, FlexCol, InputFieldS, Typography } from "../../lib";
import { InputSliderField } from "../../lib/components/form/input/InputSliderField/InputSliderField";

export default function Page() {
  const [days, setDays] = useState(28);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <FlexCol className="mb-12">
        <Typography type="h1">Buy cover</Typography>
        <Typography type="meta">
          Enter the amount you want to cover and for how long.
        </Typography>
      </FlexCol>
      <div className="grid grid-cols-5 gap-20">
        <div className="md:col-span-3 col-span-5 gap-12 flex flex-col">
          <Card size="big">
            <Typography type="h6">Quote details</Typography>
            <br />
            <div className="flex flex-col gap-12">
              <Typography type="body-regular">
                This product covers any token or combination of tokens you have
                in the Protocol. In case of a claim, you`ll receive the
                equivalent of your lost funds in ETH up to the covered amount.
                Alternatively you can select DAI.
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <InputSliderField
                    label="Duration (Days)"
                    valueLabel="Days"
                    value={days}
                    name="days"
                    min={28}
                    max={380}
                    onChange={(e) => {
                      setDays(Number(e.target.value));
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <InputFieldS
                    rightLabel="ETH"
                    leftLabel={<div>Amount</div>}
                    value={amount}
                    name="amount"
                    onChange={(e) => {
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
        <div className="md:col-span-2 col-span-5">
          <Card size="big" className="bg-white">
            Summary
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useAccount } from "wagmi";

import { MockPriceFeedAggregatorComponent } from "./MockPriceFeedAggregator/MockPriceFeedAggregatorComponent";
import { Minterc20 } from "./minterc20/minterc20";

import { Button, FlexCol, Typography } from "lib";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import { getTargetNetwork } from "lib/scaffold-lib/utils/scaffold-eth";

export default function Page() {
  const network = getTargetNetwork();
  console.log({ nw: network.name });
  const { address } = useAccount();

  const { writeAsync: updateEpochAsync, isLoading: isEpoching } =
    useWingsContractWrite({
      contractName: "StabilanCore",
      functionName: "updateEpoch",
    });

  return (
    <div className="flex flex-col gap-5">
      <FlexCol className="mb-12 gap-5">
        <Typography type="h2">Admin</Typography>
        <Typography type="meta">
          <strong>This is admin page </strong>
          Execute hidden actions here!
        </Typography>
      </FlexCol>
      <Button
        className="w-48"
        color="error"
        loading={isEpoching}
        onClick={() => {
          updateEpochAsync();
        }}
      >
        Update epoch
      </Button>

      <FlexCol className="gap-10">
        <Minterc20 />
        <MockPriceFeedAggregatorComponent />
      </FlexCol>
    </div>
  );
}

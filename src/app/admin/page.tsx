"use client";

import { Button, FlexCol, Typography } from "lib";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";

export default function Page() {
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
        color="warning"
        loading={isEpoching}
        onClick={() => {
          updateEpochAsync();
        }}
      >
        Update epoch
      </Button>
    </div>
  );
}

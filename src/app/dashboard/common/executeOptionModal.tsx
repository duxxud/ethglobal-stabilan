import { Address0x } from "app/config/Contract-Addresses";
import {
  Button,
  FlexCol,
  GenericModal,
  GenericModalHandles,
  MyFormProvider,
  RHFInputField,
  Typography,
} from "lib";
import { useWingsContractWrite } from "lib/client/hooks/useWingsContractWrite";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { etherUnits, parseUnits } from "viem";

interface FormData {
  amount: string;
}

export const ExecuteOptionModal: React.FC<{
  stabilanTokenAddress: Address0x;
}> = ({ stabilanTokenAddress }) => {
  const { writeAsync: executeOptionsAsync } = useWingsContractWrite({
    contractName: "StabilanCore",
    functionName: "executeOptions",
    args: [undefined, undefined],
  });

  const modalRef = useRef<GenericModalHandles>(null);
  const methods = useForm<FormData>({
    defaultValues: {
      amount: "",
    },
  });
  const { handleSubmit, reset, watch } = methods;

  const onSubmitAsync = async (data: FormData) => {
    await executeOptionsAsync({
      args: [
        stabilanTokenAddress,
        parseUnits(String(data.amount), etherUnits.wei),
      ],
    });
  };

  const modalContent = (
    <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmitAsync)}>
      <FlexCol className="gap-8">
        <Typography type="body-bold">Execute option</Typography>
        <FlexCol>
          <RHFInputField<FormData>
            name="amount"
            rightLabel={
              <FlexCol className="items-end content-center justify-center gap-4">
                <div className="flex flex-col items-end content-center justify-center">
                  <Typography type="body-bold">Max</Typography>
                  <Typography type="tiny">MAX: 0</Typography>
                </div>
                <Typography type="body-bold">ETH</Typography>
              </FlexCol>
            }
            placeholder="0"
            type="number"
          />
          <Button
            size="big"
            color="primary"
            className="flex-1 mt-4"
            type="submit"
          >
            Execute option
          </Button>
        </FlexCol>
      </FlexCol>
    </MyFormProvider>
  );

  return (
    <GenericModal
      ref={modalRef}
      buttonProps={{
        color: "primary",
        className: "flex-1",
      }}
      buttonText="Execute option"
      onOpen={reset}
    >
      {modalContent}
    </GenericModal>
  );
};

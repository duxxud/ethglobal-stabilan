"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";

import { tokens } from "app/config/tokens";
import {
  Button,
  FlexCol,
  GenericModal,
  GenericModalHandles,
  ImageWrapper,
  MyFormProvider,
  RHFInputField,
  Typography,
} from "lib";

interface FormData {
  amount: string;
}

export const FirstTable = () => {
  const modalRef = useRef<GenericModalHandles>(null);
  const methods = useForm<FormData>({
    defaultValues: {
      amount: "",
    },
  });
  const { handleSubmit, reset, watch } = methods;

  const onSubmitAsync = async () => {
    console.log("first");
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
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
          <tr>
            <th scope="col" className="px-6 py-3">
              Token
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Until
            </th>
            <th scope="col" className="px-6 py-3">
              #
            </th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr
              key={index}
              className="bg-white dark:bg-gray-800 border-b border-dashed border-[rgba(145,158,171,0.2)] "
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                <ImageWrapper
                  src={token.icon}
                  alt={token.name}
                  width="30"
                  height="30"
                  className="mr-2 rounded-full"
                />
                {token.name}
              </td>
              <td className="px-6 py-4">35.49 Tokens Tokens</td>
              <td className="px-6 py-4">6/13/2023</td>
              <td className="px-6 py-4">
                {/* todo if date is in the past, write expired instead of button */}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

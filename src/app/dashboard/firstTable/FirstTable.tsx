"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

import { contractAddressesByChain } from "app/config/Contract-Addresses";
import { findTokenByAddress } from "app/config/tokens";
import {
  Button,
  EmptyContent,
  FlexCol,
  GenericModal,
  GenericModalHandles,
  ImageWrapper,
  MyFormProvider,
  RHFInputField,
  Typography,
} from "lib";
import { getTargetNetwork } from "lib/scaffold-lib/utils/scaffold-eth";
import { displayTokens } from "lib/utils/tokens/display-tokens";
import { TokenType, formatUntilDate } from "../common";

interface FormData {
  amount: string;
}

const userTokens:
  | readonly {
      tokenType: number;
      tokenAddress: `0x${string}`;
      assetAddress: `0x${string}`;
      endEpoch: bigint;
      balance: bigint;
    }[]
  | undefined = [
  {
    tokenType: 0, // TokenType.OPTION, for example
    tokenAddress: "0x1234567890abcdef1234567890abcdef12345678",
    assetAddress: contractAddressesByChain.sepolia.USDC, // Mock asset address for USDC
    endEpoch: BigInt(1672527600), // Some future epoch time for expiry
    balance: BigInt(1000), // Mock balance
  },
  {
    tokenType: 1, // TokenType.BACKING, for example
    tokenAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    assetAddress: contractAddressesByChain.sepolia.USDT, // Mock asset address for USDT
    endEpoch: BigInt(1672527600), // Some future epoch time for expiry
    balance: BigInt(500), // Mock balance
  },
];
export const FirstTable = () => {
  const { address } = useAccount();
  const network = getTargetNetwork();
  // DataProvider.getUserTokens(coreContractAddress, userAddress)
  // const { data: userTokens } = useWingsContractRead({
  //   contractName: "DataProvider",
  //   functionName: "getUserTokens",
  //   args: [
  //     getAddressByTokenAndNetwork(
  //       contractAddresses.coreContractAddress,
  //       network.network
  //     ),
  //     address as Address0x,
  //   ],
  // });

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
      <FlexCol className="gap-8">
        <Typography type="h4">Options</Typography>

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
                Valid Until
              </th>
              <th scope="col" className="px-6 py-3">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {userTokens && userTokens.length > 0 ? (
              userTokens
                .filter((ut) => ut.tokenType === TokenType.OPTION)
                .map((userToken, index) => {
                  const tokenInfo = findTokenByAddress(
                    userToken.assetAddress,
                    network.network
                  );
                  const date = formatUntilDate(Number(userToken.endEpoch));
                  return (
                    <tr
                      key={index}
                      className="bg-white dark:bg-gray-800 border-b border-dashed border-[rgba(145,158,171,0.2)]"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                        <ImageWrapper
                          src={tokenInfo?.icon || "default-icon.png"}
                          alt={tokenInfo?.name || "Unknown"}
                          width="30"
                          height="30"
                          className="mr-2 rounded-full"
                        />
                        {tokenInfo?.name || "Unknown Token"}
                      </td>
                      <td className="px-6 py-4">
                        {displayTokens(userToken.balance, {
                          tokenLabel: tokenInfo?.name,
                        })}
                      </td>
                      <td className="px-6 py-4">{date}</td>
                      <td className="px-6 py-4">
                        {new Date(date) < new Date() ? (
                          <span>Expired</span>
                        ) : (
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
                        )}
                      </td>
                    </tr>
                  );
                })
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="table-cell justify-center items-center p-10"
                >
                  <EmptyContent />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </FlexCol>
    </div>
  );
};
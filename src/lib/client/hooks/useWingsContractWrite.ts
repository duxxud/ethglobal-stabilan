import { ExtractAbiFunctionNames } from "abitype";
import { useState } from "react";
import { Abi, Address } from "viem";
import { useContractWrite, useNetwork } from "wagmi";

import {
  getTargetNetwork,
  notification,
} from "../../scaffold-lib/utils/scaffold-eth";
import {
  ContractAbi,
  ContractName,
  UseScaffoldWriteConfig,
} from "../../scaffold-lib/utils/scaffold-eth/contract";
import { getParsedError } from "../../scaffold-lib/utils/scaffold-eth/utilsContracts";

import { useDeployedContractInfo } from "./useDeployedContractInfo";

export const useWingsContractWrite = <
  TContractName extends ContractName,
  TFunctionName extends ExtractAbiFunctionNames<
    ContractAbi<TContractName>,
    "nonpayable" | "payable"
  >
>({
  contractName,
  functionName,
  args,
  value,
  onBlockConfirmation,
  blockConfirmations,
  overrideContractAddress,
  ...writeConfig
}: UseScaffoldWriteConfig<TContractName, TFunctionName>) => {
  const { data: deployedContractData } = useDeployedContractInfo(contractName);
  const { chain } = useNetwork();
  const [isMining, setIsMining] = useState(false);
  const configuredNetwork = getTargetNetwork();

  const wagmiContractWrite = useContractWrite({
    address:
      (overrideContractAddress as Address) ||
      (deployedContractData?.address as Address),
    abi: deployedContractData?.abi as Abi,
    functionName: functionName as any,
    args: args as unknown[],
    value: value,
    ...writeConfig,
  });

  const sendContractWriteTx = async ({
    args: newArgs,
    value: newValue,
    onSuccess,
    onError,
    onSettled,
    ...otherConfig
  }: {
    args?: UseScaffoldWriteConfig<TContractName, TFunctionName>["args"];
    value?: UseScaffoldWriteConfig<TContractName, TFunctionName>["value"];
    onSuccess?: () => void;
    onError?: (error: any) => void;
    onSettled?: () => void;
  } & Parameters<typeof wagmiContractWrite.writeAsync>[0] = {}) => {
    if (!deployedContractData) {
      notification.error(
        "Target Contract is not deployed, did you forget to run `yarn deploy`?"
      );
      return;
    }
    if (!chain?.id) {
      notification.error("Please connect your wallet");
      return;
    }
    if (chain?.id !== configuredNetwork.id) {
      notification.error("You are on the wrong network");
      return;
    }

    try {
      setIsMining(true);
      const result = await wagmiContractWrite.writeAsync({
        args: newArgs ?? args,
        value: newValue ?? value,
        ...otherConfig,
      });
      if (onSuccess) {
        onSuccess();
      }
      return result;
    } catch (e: any) {
      const message = getParsedError(e);
      notification.error(message);
      if (onError) {
        onError(e);
      }
    } finally {
      setIsMining(false);
      if (onSettled) {
        onSettled();
      }
    }
  };

  // Then, include onSuccess and onError in the returned object from the hook
  return {
    ...wagmiContractWrite,
    isMining,
    writeAsync: sendContractWriteTx,
  };
};

"use client";

import { useAccount } from "wagmi";

import { TokenType, formatUntilDate } from "../common";

import {
  Address0x,
  AvailableChains,
  contractAddressesByChain,
} from "app/config/Contract-Addresses";
import {
  findContractKeyByAddress,
  findTokenByAddress,
} from "app/config/tokens";
import { EmptyContent, FlexCol, ImageWrapper, Typography } from "lib";
import { useAccountBalance } from "lib/client/hooks/useAccountBalance";
import { useWingsContractRead } from "lib/client/hooks/useWingsContractRead";
import { getTargetNetwork } from "lib/scaffold-lib/utils/scaffold-eth";
import { displayTokens } from "lib/utils/tokens/display-tokens";
import { ExecuteOptionModal } from "../common/executeOptionModal";

export const FirstTable = () => {
  const { address } = useAccount();
  const { balance } = useAccountBalance();
  const network = getTargetNetwork();
  // DataProvider.getUserTokens(coreContractAddress, userAddress)
  const { data: userTokens } = useWingsContractRead({
    contractName: "DataProvider",
    functionName: "getUserTokens",
    args: [
      contractAddressesByChain[network.modifiedName as AvailableChains]
        ?.StabilanCore,
      address as Address0x,
    ],
  });

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
                    userToken.undelyingAssetAddress,
                    network.modifiedName
                  );
                  const date = formatUntilDate(Number(userToken.endEpoch));
                  return (
                    <tr
                      key={index}
                      className="bg-white dark:bg-gray-800 border-b border-dashed border-[rgba(145,158,171,0.2)]"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                        <ImageWrapper
                          src={tokenInfo?.icon || ""}
                          alt={tokenInfo?.name || "Unknown"}
                          width="30"
                          height="30"
                          className="mr-2 rounded-full"
                        />
                        {tokenInfo?.name || "Unknown Token"}
                      </td>
                      <td className="px-6 py-4">
                        {displayTokens(userToken.balance, {
                          tokenLabel: findContractKeyByAddress(
                            userToken.undelyingAssetAddress,
                            network.modifiedName
                          ),
                        })}
                      </td>
                      <td className="px-6 py-4">{date}</td>
                      <td className="px-6 py-4">
                        {new Date(date) < new Date() ? (
                          <span>Expired</span>
                        ) : (
                          <ExecuteOptionModal
                            stabilanTokenAddress={
                              userToken.stabilanTokenAddress
                            }
                          />
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

import scaffoldConfig from "../../../../../scaffold.config";

import { ContractName, contracts } from "./contract";

export function getContractNames() {
  const contractsData =
    contracts?.[scaffoldConfig.targetNetwork.id]?.[0]?.contracts;
  return contractsData ? (Object.keys(contractsData) as ContractName[]) : [];
}

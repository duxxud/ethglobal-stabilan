import { useCallback, useEffect, useState } from "react";
import { Address, useBalance } from "wagmi";

import { useGlobalState } from "../../scaffold-lib/services/store/store";
import { getTargetNetwork } from "../../scaffold-lib/utils/scaffold-eth";

export function useAccountBalance(address?: string) {
  const [isEthBalance, setIsEthBalance] = useState(true);
  const [balance, setBalance] = useState<number | null>(null);
  const price = useGlobalState((state) => state.nativeCurrencyPrice);

  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address: address as Address,
    watch: true,
    chainId: getTargetNetwork().id,
  });

  const onToggleBalance = useCallback(() => {
    if (price > 0) {
      setIsEthBalance(!isEthBalance);
    }
  }, [isEthBalance, price]);

  useEffect(() => {
    if (fetchedBalanceData?.formatted) {
      setBalance(Number(fetchedBalanceData.formatted));
    }
  }, [fetchedBalanceData]);

  return { balance, price, isError, isLoading, onToggleBalance, isEthBalance };
}

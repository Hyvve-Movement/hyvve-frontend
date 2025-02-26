import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import {
  subscriptionService,
  SubscriptionStatus,
} from '@/utils/subscription/subscriptionService';

interface SubscriptionContextType {
  subscriptionStatus: SubscriptionStatus | null;
  isLoading: boolean;
  error: string | null;
  refreshSubscription: () => Promise<void>;
  isSubscribed: boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscriptionStatus: null,
  isLoading: false,
  error: null,
  refreshSubscription: async () => {},
  isSubscribed: false,
});

export const useSubscription = () => useContext(SubscriptionContext);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { account } = useWallet();
  const [subscriptionStatus, setSubscriptionStatus] =
    useState<SubscriptionStatus | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [forceRefresh, setForceRefresh] = useState<number>(0);

  const fetchSubscriptionStatus = useCallback(async (address: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const status = await subscriptionService.fetchSubscriptionStatus(address);
      setSubscriptionStatus(status);
      return status;
    } catch (err: any) {
      setError(err.message || 'Failed to fetch subscription status');
      console.error('Error fetching subscription:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshSubscription = useCallback(async (): Promise<void> => {
    if (account?.address) {
      await fetchSubscriptionStatus(account.address);
      // Force a UI update by incrementing the forceRefresh counter
      setForceRefresh((prev) => prev + 1);
    }
  }, [account?.address, fetchSubscriptionStatus]);

  // Load from localStorage on initial render
  useEffect(() => {
    const savedStatus = subscriptionService.getSubscriptionStatus();
    if (savedStatus) {
      setSubscriptionStatus(savedStatus);
    }
  }, []);

  // Fetch subscription status when wallet connects or when data is stale
  useEffect(() => {
    if (account?.address) {
      // Check if we need to refresh the data
      if (!subscriptionStatus || subscriptionService.isSubscriptionStale()) {
        fetchSubscriptionStatus(account.address);
      }
    } else {
      // Clear subscription status when wallet disconnects
      setSubscriptionStatus(null);
      subscriptionService.clearSubscriptionStatus();
    }
  }, [
    account?.address,
    subscriptionStatus,
    fetchSubscriptionStatus,
    forceRefresh,
  ]);

  return (
    <SubscriptionContext.Provider
      value={{
        subscriptionStatus,
        isLoading,
        error,
        refreshSubscription,
        isSubscribed: !!subscriptionStatus?.isActive,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

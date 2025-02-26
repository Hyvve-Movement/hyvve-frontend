import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { WalletProvider } from '@/helpers/WalletProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <SubscriptionProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </SubscriptionProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
}

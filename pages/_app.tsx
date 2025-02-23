import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "@/helpers/WalletProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </QueryClientProvider>
  );
}
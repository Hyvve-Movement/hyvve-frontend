import { PropsWithChildren } from 'react';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { AptosConfig, Network } from '@aptos-labs/ts-sdk';
import { toast } from 'react-toastify';

import { NETWORK } from '@/constants';

const network: Network = NETWORK as Network;

const config = new AptosConfig({
  network: Network.TESTNET,
  fullnode: 'https://aptos.testnet.bardock.movementlabs.xyz/v1',
  faucet: 'https://faucet.testnet.bardock.movementnetwork.xyz/',
});

export function WalletProvider({ children }: PropsWithChildren) {
  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={config}
      onError={(error) => {
        toast.error(error || 'Unknown wallet error', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}

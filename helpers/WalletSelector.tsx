import React, { useCallback, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  useWallet,
  AnyAptosWallet,
  WalletName,
  isAptosConnectWallet,
  truncateAddress,
  groupAndSortWallets,
  isInstallRequired,
} from '@aptos-labs/wallet-adapter-react';
import { toast } from 'react-toastify';
import { ChevronDown, Copy, LogOut, User } from 'lucide-react';

const APTOS_CONNECT_ACCOUNT_URL = 'https://aptosconnect.com/account';

export function WalletSelector() {
  const { account, connected, disconnect, wallet } = useWallet();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    if (connected && account) {
      setIsConnecting(false);
      setIsDialogOpen(false);
      //   toast.success('Wallet connected successfully');
    } else if (connected && !account) {
      setIsConnecting(true);
    } else {
      setIsConnecting(false);
    }
  }, [connected, account]);

  const closeDialog = useCallback(() => setIsDialogOpen(false), []);

  const copyAddress = useCallback(async () => {
    if (!account?.address) return;
    try {
      await navigator.clipboard.writeText(account.address);
      toast.success('Copied wallet address to clipboard.');
    } catch {
      toast.error('Failed to copy wallet address.');
    }
  }, [account?.address]);

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnect();
      toast.success('Wallet disconnected');
    } catch (error) {
      console.error('Failed to disconnect:', error);
      toast.error('Failed to disconnect wallet');
    }
  }, [disconnect]);

  return (
    <>
      <div className="relative">
        {connected && account ? (
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f5f5fa08] border border-[#f5f5fa14] 
            hover:bg-[#f5f5fa14] transition-all duration-200"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[#f5f5faf4] text-sm">
                {account.ansName ||
                  truncateAddress(account.address) ||
                  'Unknown'}
              </span>
                  
              <span onClick={handleDisconnect}>disconnect</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-[#f5f5fa7a] transition-transform duration-200 
              ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
        ) : (
          <button
            onClick={() => setIsDialogOpen(true)}
            className="px-4 py-2 border-[1px] border-purple-400 text-gray-200 rounded-md text-sm mr-4"
            disabled={isConnecting}
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 top-full mt-2 w-64 overflow-hidden transition-all duration-200 origin-top highest-z-index
          ${
            isDropdownOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="bg-[#1a1a1a] rounded-xl border border-[#f5f5fa14] shadow-xl overflow-hidden">
            {/* Account Info Section */}
            <div className="p-4 border-b border-[#f5f5fa14] bg-[#f5f5fa08]">
              <p className="text-[#f5f5fa7a] text-xs">Connected Wallet</p>
              <p className="text-[#f5f5faf4] font-medium mt-1">
                {account?.ansName || truncateAddress(account?.address)}
              </p>
            </div>

            {/* Actions Section */}
            <div className="p-2">
              {/* <button
                onClick={copyAddress}
                className="flex items-center gap-3 w-full p-3 text-left text-sm text-[#f5f5faf4] 
                rounded-lg hover:bg-[#f5f5fa14] transition-all duration-200 group"
              >
                <div
                  className="w-8 h-8 rounded-lg bg-[#f5f5fa08] flex items-center justify-center
                group-hover:bg-[#f5f5fa14] transition-all duration-200"
                >
                  <Copy className="w-4 h-4 text-[#a855f7]" />
                </div>
                Copy Address
              </button> */}

              {wallet && isAptosConnectWallet(wallet) && (
                <a
                  href={APTOS_CONNECT_ACCOUNT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-3 text-left text-sm text-[#f5f5faf4] 
                  rounded-lg hover:bg-[#f5f5fa14] transition-all duration-200 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-[#f5f5fa08] flex items-center justify-center
                  group-hover:bg-[#f5f5fa14] transition-all duration-200"
                  >
                    <User className="w-4 h-4 text-[#a855f7]" />
                  </div>
                  Account Settings
                </a>
              )}

              <button
                onClick={handleDisconnect}
                className="flex items-center gap-3 w-full p-3 text-left text-sm text-red-400
                rounded-lg hover:bg-[#f5f5fa14] transition-all duration-200 group"
              >
                <div
                  className="w-8 h-8 rounded-lg bg-[#f5f5fa08] flex items-center justify-center
                group-hover:bg-[#f5f5fa14] transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                </div>
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <Portal>
          <ConnectWalletDialog close={closeDialog} />
        </Portal>
      )}
    </>
  );
}

function Portal({ children }) {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.zIndex = '999999';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.pointerEvents = 'none';
    setContainer(div);

    document.body.appendChild(div);
    return () => {
      document.body.removeChild(div);
    };
  }, []);

  if (!mounted || !container) return null;

  return ReactDOM.createPortal(children, container);
}

interface ConnectWalletDialogProps {
  close: () => void;
}

function ConnectWalletDialog({ close }: ConnectWalletDialogProps) {
  const { wallets = [], connect } = useWallet();
  const [showMore, setShowMore] = useState(false);

  const { aptosConnectWallets, availableWallets, installableWallets } =
    groupAndSortWallets(wallets);

  const hasAptosConnectWallets = !!aptosConnectWallets.length;

  const handleConnect = async (wallet: AnyAptosWallet) => {
    try {
      await connect(wallet.name as WalletName);
      close();
    } catch (error) {
      console.error('Failed to connect:', error);
      toast.error(`Failed to connect to ${wallet.name}`);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(15px)',
        pointerEvents: 'auto',
      }}
    >
      <div
        className="bg-[#1a1a1a] rounded-2xl border border-[#f5f5fa14] p-6 w-full max-w-md m-4
        max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#f5f5fa14] scrollbar-track-transparent
        animate-fadeIn"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#f5f5faf4]">Connect Wallet</h2>
          <p className="text-[#f5f5fa7a] text-sm mt-1">
            Choose your preferred wallet
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-[#f5f5faf4] font-medium">Available Wallets</h3>
            {availableWallets.map((wallet) => (
              <WalletRow
                key={wallet.name}
                wallet={wallet}
                onConnect={() => handleConnect(wallet)}
              />
            ))}
          </div>

          {!!installableWallets.length && (
            <div className="space-y-3">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-2 text-[#a855f7] text-sm font-medium"
              >
                {showMore ? 'Show Less' : 'More Options'}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showMore ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {showMore && (
                <div className="space-y-2">
                  {installableWallets.map((wallet) => (
                    <WalletRow
                      key={wallet.name}
                      wallet={wallet}
                      onConnect={() => handleConnect(wallet)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={close}
          className="mt-6 w-full p-3 rounded-xl border border-[#f5f5fa14] text-[#f5f5fa7a] 
          hover:bg-[#f5f5fa14] transition-colors text-sm font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

interface WalletRowProps {
  wallet: AnyAptosWallet;
  onConnect: () => void;
}

function WalletRow({ wallet, onConnect }: WalletRowProps) {
  return (
    <div
      className="flex items-center justify-between p-3 rounded-xl border border-[#f5f5fa14] 
    bg-[#f5f5fa08] hover:bg-[#f5f5fa14] transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/5 p-2">
          <img
            src={wallet.icon}
            alt={`${wallet.name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-[#f5f5faf4] font-medium">{wallet.name}</span>
      </div>
      {isInstallRequired(wallet) ? (
        <a
          href={wallet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-[#f5f5fa14] text-[#f5f5faf4] text-sm font-medium
          hover:bg-[#f5f5fa1a] transition-colors"
        >
          Install
        </a>
      ) : (
        <button
          onClick={onConnect}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white 
          text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default WalletSelector;

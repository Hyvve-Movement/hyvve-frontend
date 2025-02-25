import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiX, HiKey, HiCloudDownload, HiLockOpen } from 'react-icons/hi';
import { decryptFile } from '@/utils/crypto/generateCampaignKeys';
import { toast } from 'react-toastify';

interface DecryptSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  ipfsHash?: string;
}

const DecryptSubmissionModal: React.FC<DecryptSubmissionModalProps> = ({
  isOpen,
  onClose,
  ipfsHash: initialIpfsHash,
}) => {
  const [privateKey, setPrivateKey] = useState('');
  const [ipfsHash, setIpfsHash] = useState(initialIpfsHash || '');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptedFile, setDecryptedFile] = useState<ArrayBuffer | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Update ipfsHash when prop changes
  useEffect(() => {
    if (initialIpfsHash) {
      setIpfsHash(initialIpfsHash);
    }
  }, [initialIpfsHash]);

  const validatePrivateKey = (key: string): boolean => {
    try {
      // Check if it's a valid base64 string
      if (!key.match(/^[A-Za-z0-9+/]*={0,2}$/)) {
        throw new Error(
          'Invalid private key format. Please provide a valid base64 encoded RSA private key.'
        );
      }

      // Try decoding the base64 string
      const decoded = atob(key);
      if (!decoded) {
        throw new Error('Invalid private key format');
      }

      return true;
    } catch (err) {
      setError(
        'Invalid private key format. Please provide a valid base64 encoded RSA private key.'
      );
      return false;
    }
  };

  const handleDecrypt = async () => {
    if (!privateKey || !ipfsHash) {
      toast.error('Please provide both private key and IPFS hash');
      return;
    }

    if (!validatePrivateKey(privateKey)) {
      return;
    }

    setIsDecrypting(true);
    setError(null);

    try {
      // Fetch encrypted data from IPFS
      const response = await fetch(
        `https://gateway.pinata.cloud/ipfs/${ipfsHash}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch encrypted data from IPFS');
      }

      const encryptedData = new Uint8Array(await response.arrayBuffer());

      if (encryptedData.length === 0) {
        throw new Error('Received empty data from IPFS');
      }

      // Decrypt the file
      try {
        const decryptedData = await decryptFile(encryptedData, privateKey);
        if (!decryptedData || decryptedData.byteLength === 0) {
          throw new Error('Decryption resulted in empty data');
        }
        setDecryptedFile(decryptedData);
        toast.success('File decrypted successfully!');
      } catch (decryptError) {
        console.error('Decryption error details:', decryptError);
        throw new Error(
          'Failed to decrypt the file. Please make sure you are using the correct private key for this campaign.'
        );
      }
    } catch (err) {
      console.error('Decryption error:', err);
      setError(err instanceof Error ? err.message : 'Failed to decrypt file');
      toast.error(
        err instanceof Error ? err.message : 'Failed to decrypt file'
      );
    } finally {
      setIsDecrypting(false);
    }
  };

  const handleDownload = () => {
    if (!decryptedFile) return;

    try {
      const blob = new Blob([decryptedFile]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'decrypted_submission';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
      toast.error('Failed to download the decrypted file');
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#0f0f17] p-6 shadow-xl transition-all border border-[#f5f5fa14]">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-[#f5f5fa7a] hover:text-white transition-colors"
              >
                <HiX className="h-6 w-6" />
              </button>

              <Dialog.Title className="text-2xl font-bold text-white mb-2">
                Decrypt Submission
              </Dialog.Title>
              <Dialog.Description className="text-[#f5f5fa7a] text-sm mb-6">
                Enter your private key and IPFS hash to decrypt the submission
              </Dialog.Description>

              <div className="space-y-4">
                {/* Private Key Input */}
                <div>
                  <label className="block text-sm font-medium text-[#f5f5faf4] mb-2">
                    Private Key
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiKey className="h-5 w-5 text-[#f5f5fa7a]" />
                    </div>
                    <input
                      type="password"
                      value={privateKey}
                      onChange={(e) => setPrivateKey(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-[#f5f5fa0a] border border-[#f5f5fa14] rounded-xl text-[#f5f5faf4] placeholder-[#f5f5fa7a] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent"
                      placeholder="Enter your RSA private key"
                    />
                  </div>
                </div>

                {/* IPFS Hash Input */}
                <div>
                  <label className="block text-sm font-medium text-[#f5f5faf4] mb-2">
                    IPFS Hash
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiCloudDownload className="h-5 w-5 text-[#f5f5fa7a]" />
                    </div>
                    <input
                      type="text"
                      value={ipfsHash}
                      onChange={(e) => setIpfsHash(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-[#f5f5fa0a] border border-[#f5f5fa14] rounded-xl text-[#f5f5faf4] placeholder-[#f5f5fa7a] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent"
                      placeholder="Enter the IPFS hash"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-red-500 text-sm">{error}</p>
                  </div>
                )}

                {decryptedFile && (
                  <div className="p-4 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl">
                    <p className="text-[#22c55e] text-sm mb-3">
                      File decrypted successfully!
                    </p>
                    <button
                      onClick={handleDownload}
                      className="w-full px-4 py-2 bg-[#22c55e] text-white rounded-lg text-sm font-medium hover:bg-[#22c55e]/90 transition-colors"
                    >
                      Download Decrypted File
                    </button>
                  </div>
                )}

                <button
                  onClick={handleDecrypt}
                  disabled={isDecrypting || !privateKey || !ipfsHash}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:ring-offset-2 focus:ring-offset-[#0f0f17] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isDecrypting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Decrypting...</span>
                    </>
                  ) : (
                    <>
                      <HiLockOpen className="h-5 w-5" />
                      <span>Decrypt File</span>
                    </>
                  )}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DecryptSubmissionModal;

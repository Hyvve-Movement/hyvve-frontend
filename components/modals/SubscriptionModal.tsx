import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  HiX,
  HiCurrencyDollar,
  HiCheck,
  HiMinus,
  HiPlus,
} from 'react-icons/hi';
import { Switch } from '@headlessui/react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [autoRenew, setAutoRenew] = useState(true);
  const [delegatedAmount, setDelegatedAmount] = useState(5);

  const handleDelegatedAmountChange = (change: 'increase' | 'decrease') => {
    if (change === 'increase') {
      setDelegatedAmount((prev) => Math.min(prev + 5, 100));
    } else {
      setDelegatedAmount((prev) => Math.max(prev - 5, 5));
    }
  };

  const handleSubscribe = () => {
    console.log(
      'Subscribing to Hive Premium with auto-renewal:',
      autoRenew,
      'delegated amount:',
      delegatedAmount
    );
    onClose();
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
                Upgrade to Hive Premium
              </Dialog.Title>
              <Dialog.Description className="text-[#f5f5fa7a] text-sm mb-6">
                Unlock premium features and support the Hive ecosystem
              </Dialog.Description>

              <div className="bg-[#f5f5fa0a] rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#f5f5faf4] font-medium">
                    Monthly Subscription
                  </span>
                  <div className="flex items-center">
                    <HiCurrencyDollar className="h-5 w-5 text-[#a855f7]" />
                    <span className="text-lg font-bold text-white">5 MOVE</span>
                  </div>
                </div>
                <p className="text-[#f5f5fa7a] text-sm">
                  Your subscription will be automatically deducted every month
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 border border-[#f5f5fa14] rounded-xl">
                  <div className="space-y-1">
                    <h3 className="text-[#f5f5faf4] font-medium">
                      Auto-renewal
                    </h3>
                    <p className="text-[#f5f5fa7a] text-sm">
                      Keep your premium benefits active
                    </p>
                  </div>
                  <Switch
                    checked={autoRenew}
                    onChange={setAutoRenew}
                    className={`${
                      autoRenew ? 'bg-[#a855f7]' : 'bg-[#f5f5fa14]'
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:ring-offset-2 focus:ring-offset-[#0f0f17]`}
                  >
                    <span className="sr-only">Enable auto-renewal</span>
                    <span
                      className={`${
                        autoRenew ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                  </Switch>
                </div>

                {/* Delegated Funds Input - Only shown when autoRenew is true */}
                <Transition
                  show={autoRenew}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="p-4 border border-[#f5f5fa14] rounded-xl bg-[#f5f5fa0a]">
                    <div className="space-y-1 mb-3">
                      <h3 className="text-[#f5f5faf4] font-medium">
                        Delegated Funds
                      </h3>
                      <p className="text-[#f5f5fa7a] text-sm">
                        Choose amount in multiples of 5 MOVE
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleDelegatedAmountChange('decrease')}
                        className="p-2 rounded-lg bg-[#f5f5fa14] text-[#f5f5faf4] hover:bg-[#f5f5fa1a] transition-colors"
                        disabled={delegatedAmount <= 5}
                      >
                        <HiMinus className="h-5 w-5" />
                      </button>
                      <div className="flex items-center">
                        <HiCurrencyDollar className="h-5 w-5 text-[#a855f7]" />
                        <span className="text-lg font-bold text-white">
                          {delegatedAmount} MOVE
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelegatedAmountChange('increase')}
                        className="p-2 rounded-lg bg-[#f5f5fa14] text-[#f5f5faf4] hover:bg-[#f5f5fa1a] transition-colors"
                      >
                        <HiPlus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </Transition>
              </div>

              <button
                onClick={handleSubscribe}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:ring-offset-2 focus:ring-offset-[#0f0f17]"
              >
                Subscribe Now
              </button>

              <p className="mt-4 text-center text-xs text-[#f5f5fa7a]">
                By subscribing, you agree to the terms of Hive Premium
                membership
              </p>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SubscriptionModal;

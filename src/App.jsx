import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './RequestAirdrop';
import Background from './components/Background';
import Balance from './Balance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {
  return (
    <Background>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className='flex flex-col items-center justify-center h-screen gap-2'>
              <div className='flex max-w-md w-screen justify-around'>
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <RequestAirdrop />
              <Balance />
              <SendTokens />
              <SignMessage />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Background>
  )
}

export default App
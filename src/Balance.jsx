import React, { useEffect } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export default function Balance() {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById('balance').innerHTML = (balance / LAMPORTS_PER_SOL);
    } else {
      document.getElementById('balance').innerHTML = 'Not connected';
    }
  }

  useEffect(() => {
    getBalance();
    const intervalId = setInterval(getBalance, 10000);

    return () => clearInterval(intervalId);
  }, [wallet.publicKey, wallet.connected]);

  return (
    <div>
      Balance: <span id='balance'>Not connected</span> SOL
    </div>
  )
}

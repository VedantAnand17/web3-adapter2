import React from 'react'
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useState } from 'react';

export default function RequestAirdrop() {

  const [amount, setAmount] = useState('');
  const wallet = useWallet();
  const { connection } = useConnection();

  function requestAirdrop() {
    const publicKey = wallet.publicKey;
    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;
    connection.requestAirdrop(publicKey, lamports);
  }

  return (
    <div className='flex flex-col items-center gap-2 pt-5'>
      <span className="font-bold text-xl">Request Airdop</span>
      Wallet: {wallet.publicKey?.toBase58()}
      <Input type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount" />
      <Button onClick={requestAirdrop}>Request Airdrop</Button>
    </div>
  )
}

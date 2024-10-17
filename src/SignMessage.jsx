import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success');
        console.log(`Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div className='flex flex-col space-y-1 pt-5'>
            <span className="font-bold text-xl text-center">Sign Message</span>
            <Input id="message" type="text" placeholder="Message" />
            <Button onClick={onClick}>
                Sign Message
            </Button>
        </div>
    );
};
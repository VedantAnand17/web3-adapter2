import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";


export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return <div className="flex flex-col space-y-1 text-center pt-5">
        <span className="font-bold text-xl">Send Tokens</span>
        <Input id="to" type="text" placeholder="To" />
        <Input id="amount" type="text" placeholder="Amount" />
        <Button onClick={sendTokens}>Send</Button>
    </div>
}
import { connectWallet } from "../utils/web3"

export default function Home() {

  const connect = async () => {

    const signer = await connectWallet()

    console.log("Connected:", signer)

  }

  return (

    <div>

      <h1>Synthix Protocol</h1>

      <button onClick={connect}>
        Connect Wallet
      </button>

    </div>

  )

}

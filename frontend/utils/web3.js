import { ethers } from "ethers"

export const connectWallet = async () => {

  if (!window.ethereum) return null

  const provider = new ethers.BrowserProvider(window.ethereum)

  await provider.send("eth_requestAccounts", [])

  const signer = await provider.getSigner()

  return signer
}

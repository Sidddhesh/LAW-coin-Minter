import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";


require('dotenv').config();
const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      
      process.env.PRIVATE_KEY as string,
      
      ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
    )
  );
const token = sdk.getCurrencyModule("0xE15dDff4Cdc0154dc017AD00c5e917E6835743cB");
  
const amount = ethers.utils.parseUnits("1000", 18);

const mintCurrency = async () => {
  try {
    await token.mint(amount);
    console.log("Minted 1000 LAW coin");
  } catch (err) {
    console.log(err);
  }
};


mintCurrency();
# Stabilan

Stabilan is a Decentralized Trustless Insurance Protocol developed during the ETHGlobal Istanbul 2023 Hackathon.<br/>
We present a use case where users can protect their assets from price crashes or stablecoins from depegging.<br/>

**DEMO**: https://stabilan-fe-2.vercel.app/s

# What is the Stabilan Protocol?

The protocol acts as a matchmaking pool between Asset Backers (risk takers) and users who are purchasing insurance.<br/>
Insurance is represented as a put option with a predetermined strike price and duration chosen by the insuree.<br/>
The Stabilan Protocol ensures that all insurances are always fully collateralized and solvent.<br/>
Insurees are guaranteed to always be able to sell their options for the strike price and receive that value in the collateral asset.<br/>

# How It Works
Backers choose an asset to back, the amount of collateral to provide, and the duration (in months) for how long they will back the asset.<br/>
Insurees select an asset for which they want to be insured, the asset amount, and the duration (in months) of the insurance.<br/>
Insurees pay a premium, which is calculated based on the current utilization of the pool (similar to variable rates in Lending protocols). The entire premium is split between Backers as a reward and automatically staked as new collateral.<br/>
<br/>
Insurees receive option tokens in their wallet, which are liquid and transferable. Backers also receive backing tokens in their wallet, which are transferable, giving them the option to sell their position while keeping a portion of the premiums earned up to that point.<br/>
<br/>
Insurees can exercise their options at any time before the expiration date. They burn the option token, send the desired amount of the asset to the protocol, and receive back the collateral valued at the predetermined strike price of the token.<br/>
<br/>
When the backing period expires, backers can collect all earned premiums during their backing duration, as well as assets obtained when options are executed.<br/>
<br/>
The price of the collateral asset is obtained from an external oracle. For the purposes of this hackathon, the Chainlink oracle is used on the Base testnet, while the Chronicle oracle is used on the Polygon zkEVM testnet.<br/>
<br/>

# Main Features
- **Trustless and Decentralized**
  - All smart contracts are open-sourced and verified on the blockchain. There are no owners of the protocol, and no one takes fees, besides Backers who provide liquidity.
- **Full Solvency, No Commission, No Jury**
  - Insurees are always able to execute their options at the strike price. There is no condition other than the expiration date.
- **Fair Insurance Price**
  - The price is calculated based on the current utilization of the collateral. If utilization is low, the insurance price is low, encouraging users to buy it and giving the opportunity to resell for a higher price. If utilization is high, indicating high demand, there is an opportunity for Backers to provide more collateral, earning more rewards.
- **Maximal Collateral Usage**
  - The premium paid by users is given in the collateral token and automatically staked to cover new insurances.
- **Asset Agnostic**
  - The protocol works with any ERC20 token. It will be up to the Backers (future DAO token holders) to determine the risk of an asset, which will determine the striking price.

## Technical Details

### Smart Contracts

Smart Contracts are deployed on the Polygon zkEVM testnet and Base testnet.<br/>

#### Polygon zkEVM addresses

StabilanCore:  0xc7253058832346174170609fF60a25787Db20087<br/>
DataProvider:  0x701bb47110870e256e8cF227Ecd16B91a4865547<br/>
Insrd:  0x24026186C7Cc7741982543764a54cA3bBbDD9C0e<br/>
InsurancePlugin:  0x6c302554Ef2A882d982b740d985Dc5EdF8635eC9<br/>

### 1Inch Token Plugin
We present the use case of the 1Inch Token Plugin - InsurancePlugin, which allows users to ensure assets are always insured in their wallet.<br/>
The InsurancePlugin checks if both users have opted to be always insured, and on asset transfer between them, options (insurance tokens) are transferred automatically in the amount of the asset transfer.<br/>
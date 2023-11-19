# Stabilan

Stabilan is a Decentralized Trustless Insurance Protocol built during the ETHGlobal Istanbul 2023 Hackathon.
We are presenting usecase where users can protect their assets of the price crash or stablecoins from depeg.

## What is Stabilan protocol?

Protocol is acting as a matchmaking pool between Asset Backers (risk takers) and users which are buying insurance.
Insurance is represented as an *put option* with predetermined strike price and duration chosen by insuree.
Stabilan Protocol is ensuring that all insurances are always fully collateralized and solvent. 
Insurees are guaranteed to be always able to sell their options for the strike price and get that value in collateral asset. 

## How It works?

Backers choose an asset to back, amount of collateral to provide and duration (in months) for how long to back the asset.
Insurees choose an asset for which they want to be insured, asset amount and duration (in months) of insurance. 
Insurees pays premium which is calculated based on the current utilization of the pool (similar to variable rates on the Lending protocols). The whole premium is splitted between Backers as a reward, and automatically staked as a new collateral.

Insurees gets option tokens in their wallet which are liquid and transferable. Backers also gets backing token in their wallet which is transferable, giving them option to sell their position, while keeping portion of premiums earned until that moment.

Insurees can execute their options at any moment before the expiration date. They burn option token, and send wanted amount of the asset to the protocol, and gets back the collateral valued with the predetermined strike price of the token.

When the backing period expires, backers are able to collect all earned premiums during their backing duration, and also assets which are obtained when options are exectued.

Price of the collateral asset is obtained from the external oracle. For the purposes of this hackathon, Chainlink oracle is used on the Base testnet, while Chronicle oracle is used on the Polygon zkEVM testnet.

### Main features
- **Trustless and decentralized**
- - All smart contracts are open sourced and verified on the blockchain. There are no owners of the protocol, and nobody is taking fees, besides Backers who are providing liquidity.
- **Full solvency, No comission, No jury**
- - Insurees are always able to execute their options at the strike price. There is no condition besides expiration date.
- **Fair insurance price**
- - Price is calculated based on the current utilization of the collateral. If the utilization is low, the insurance price is low encoruging users to buy it and givin oportunity to resell for higher price. If utilization is high, that means demand is high and there is opportunity for Backers to provide more collateral earning more rewards.
- **Maximal collateral usage**
- - Premium which is paid by users is given in the collateral token, and automatically staked for it to be able to cover new insurances.
- **Asset agnostic**
- - Protocol works with any ERC20 token. It will be on the Backers (future DAO token holders) to determin risk of an asset which will determin striking price.


## Technical details

### Smart Contracts

Smart Contracts are deployed on the Polygon zkEVM testnet and Base testnet.
Addresses:


### 1Inch Token Plugin

We are presenting the usecase of 1Inch Token Plugin - InsurancePlugin which allows users to enable asset to be always insured in their wallet.
InsurancePlugin checks if both users opted to be always insured, and on asset transfer between them, options (insurance tokens) are transfered automatically in the amount of the asset transfer.
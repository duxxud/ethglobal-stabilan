#!/bin/bash

#forge script ./src/script/Deploy.s.sol --rpc-url='https://polygonzkevm-testnet.g.alchemy.com/v2/9wFCtXKKa3vzO9FWvPWugibJnxIBCp_0'  --broadcast --verify --etherscan-api-key AFAVNHDHSHDQMZTKDXPSISQ7KQP2I3HXUP --verifier-url https://api.zkevm.polygonscan.com/api

forge verify-contract 0x5f89EAa0b4Ebf7b9E84b977F8372b29Ce3dc26E3 PriceFeedAggregator --verifier-url https://api.zkevm.polygonscan.com/ --etherscan-api-key AFAVNHDHSHDQMZTKDXPSISQ7KQP2I3HXUP 

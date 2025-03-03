// https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#2---accept-the-cap
// https://gist.github.com/tomrpl/3cfd34e04a01f9cbae2b16887f8026cf

import { ethers } from 'ethers'

// Function to compute the ID
export function computeMarketParamsId(params: { loanToken: string; collateralToken: string; oracle: string; irm: string; lltv: bigint }): string {
    // Convert each address to 32 bytes and numbers to a 32-byte hex string
    const loanToken = ethers.toBeHex(params.loanToken, 32)
    const collateralToken = ethers.toBeHex(params.collateralToken, 32)
    const oracle = ethers.toBeHex(params.oracle, 32)
    const irm = ethers.toBeHex(params.irm, 32)
    const lltv = ethers.toBeHex(params.lltv, 32)

    // Concatenate all the parameters (remove '0x' from subsequent items)
    const concatenatedParams = loanToken + collateralToken.slice(2) + oracle.slice(2) + irm.slice(2) + lltv.slice(2)

    // Compute the Keccak256 hash
    return ethers.keccak256(concatenatedParams)
}

import { ethers, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
/**
 * Deploy contract using create2.
 *
 * Deploy an arbitrary contract using a create2 factory. Can be used with an ethers provider on any network.
 *
 */
export declare function deployContract({ salt, contractBytecode, constructorTypes, constructorArgs, signer, }: {
    salt: string | number;
    contractBytecode: string;
    constructorTypes?: string[];
    constructorArgs?: any[];
    signer: Signer;
}): Promise<{
    txHash: string;
    address: string;
    receipt: ethers.providers.TransactionReceipt;
}>;
/**
 * Calculate create2 address of a contract.
 *
 * Calculates deterministic create2 address locally.
 *
 */
export declare function getCreate2Address({ salt, contractBytecode, constructorTypes, constructorArgs, }: {
    salt: string | number;
    contractBytecode: string;
    constructorTypes?: string[];
    constructorArgs?: any[];
}): string;
/**
 * Determine if a given contract is deployed.
 *
 * Determines if a given contract is deployed at the address provided.
 *
 */
export declare function isDeployed(address: string, provider: Provider): Promise<boolean>;
/**
 * Deploy create2 factory for local development.
 *
 * Deploys the create2 factory locally for development purposes. Requires funding address `0x2287Fa6efdEc6d8c3E0f4612ce551dEcf89A357A` with eth to perform deployment.
 *
 */
export declare function deployFactory(provider: Provider): Promise<string>;

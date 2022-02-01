import { ethers } from 'ethers';
import { Interface } from 'ethers/lib/utils';
import { TransactionReceipt, Provider } from '@ethersproject/providers';
export declare const factoryAddress = "0x4a27c059FD7E383854Ea7DE6Be9c390a795f6eE3";
export declare const factoryBytecode = "0x608060405234801561001057600080fd5b506101b3806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639c4ae2d014610030575b600080fd5b6100f36004803603604081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506100f5565b005b6000818351602085016000f59050803b61010e57600080fd5b7fb03c53b28e78a88e31607a27e1fa48234dce28d5d9d9ec7b295aeb02e674a1e18183604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150505056fea265627a7a72315820d9c09b41b3c6591ba80cae0b1fbcba221c30c329fceb03a0352e0f93fb79893264736f6c63430005110032";
export declare const factoryAbi: ({
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    constant?: undefined;
    outputs?: undefined;
    payable?: undefined;
    stateMutability?: undefined;
} | {
    constant: boolean;
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: never[];
    payable: boolean;
    stateMutability: string;
    type: string;
    anonymous?: undefined;
})[];
export declare const buildBytecode: (constructorTypes: any[], constructorArgs: any[], contractBytecode: string) => string;
export declare const buildCreate2Address: (saltHex: string, byteCode: string) => string;
export declare const numberToUint256: (value: number) => string;
export declare const saltToHex: (salt: string | number) => string;
export declare const encodeParam: (dataType: any, data: any) => string;
export declare const encodeParams: (dataTypes: any[], data: any[]) => string;
export declare const isContract: (address: string, provider: Provider) => Promise<boolean>;
export declare const parseEvents: (receipt: TransactionReceipt, contractInterface: Interface, eventName: string) => ethers.utils.LogDescription[];

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEvents = exports.isContract = exports.encodeParams = exports.encodeParam = exports.saltToHex = exports.numberToUint256 = exports.buildCreate2Address = exports.buildBytecode = exports.factoryAbi = exports.factoryBytecode = exports.factoryAddress = void 0;
var ethers_1 = require("ethers");
exports.factoryAddress = '0x4a27c059FD7E383854Ea7DE6Be9c390a795f6eE3';
exports.factoryBytecode = '0x608060405234801561001057600080fd5b506101b3806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639c4ae2d014610030575b600080fd5b6100f36004803603604081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506100f5565b005b6000818351602085016000f59050803b61010e57600080fd5b7fb03c53b28e78a88e31607a27e1fa48234dce28d5d9d9ec7b295aeb02e674a1e18183604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150505056fea265627a7a72315820d9c09b41b3c6591ba80cae0b1fbcba221c30c329fceb03a0352e0f93fb79893264736f6c63430005110032';
exports.factoryAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'addr',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'salt',
                type: 'uint256',
            },
        ],
        name: 'Deployed',
        type: 'event',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'bytes',
                name: 'code',
                type: 'bytes',
            },
            {
                internalType: 'uint256',
                name: 'salt',
                type: 'uint256',
            },
        ],
        name: 'deploy',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
var buildBytecode = function (constructorTypes, constructorArgs, contractBytecode) {
    return "".concat(contractBytecode).concat((0, exports.encodeParams)(constructorTypes, constructorArgs).slice(2));
};
exports.buildBytecode = buildBytecode;
var buildCreate2Address = function (saltHex, byteCode) {
    var factoryAddress = '0x4a27c059FD7E383854Ea7DE6Be9c390a795f6eE3';
    return "0x".concat(ethers_1.ethers.utils
        .keccak256("0x".concat(['ff', factoryAddress, saltHex, ethers_1.ethers.utils.keccak256(byteCode)]
        .map(function (x) { return x.replace(/0x/, ''); })
        .join('')))
        .slice(-40)).toLowerCase();
};
exports.buildCreate2Address = buildCreate2Address;
var numberToUint256 = function (value) {
    var hex = value.toString(16);
    return "0x".concat('0'.repeat(64 - hex.length)).concat(hex);
};
exports.numberToUint256 = numberToUint256;
var saltToHex = function (salt) {
    return ethers_1.ethers.utils.id(salt.toString());
};
exports.saltToHex = saltToHex;
var encodeParam = function (dataType, data) {
    var abiCoder = ethers_1.ethers.utils.defaultAbiCoder;
    return abiCoder.encode([dataType], [data]);
};
exports.encodeParam = encodeParam;
var encodeParams = function (dataTypes, data) {
    var abiCoder = ethers_1.ethers.utils.defaultAbiCoder;
    return abiCoder.encode(dataTypes, data);
};
exports.encodeParams = encodeParams;
var isContract = function (address, provider) { return __awaiter(void 0, void 0, void 0, function () {
    var code;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provider.getCode(address)];
            case 1:
                code = _a.sent();
                return [2 /*return*/, code.slice(2).length > 0];
        }
    });
}); };
exports.isContract = isContract;
var parseEvents = function (receipt, contractInterface, eventName) {
    return receipt.logs
        .map(function (log) { return contractInterface.parseLog(log); })
        .filter(function (log) { return log.name === eventName; });
};
exports.parseEvents = parseEvents;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployFactory = exports.isDeployed = exports.getCreate2Address = exports.deployContract = void 0;
var assert_1 = __importDefault(require("assert"));
var ethers_1 = require("ethers");
var utils_1 = require("./utils");
/**
 * Deploy contract using create2.
 *
 * Deploy an arbitrary contract using a create2 factory. Can be used with an ethers provider on any network.
 *
 */
function deployContract(_a) {
    var salt = _a.salt, contractBytecode = _a.contractBytecode, _b = _a.constructorTypes, constructorTypes = _b === void 0 ? [] : _b, _c = _a.constructorArgs, constructorArgs = _c === void 0 ? [] : _c, signer = _a.signer;
    return __awaiter(this, void 0, void 0, function () {
        var saltHex, factory, bytecode, result, computedAddr, logs, addr;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    saltHex = (0, utils_1.saltToHex)(salt);
                    factory = new ethers_1.ethers.Contract(utils_1.factoryAddress, utils_1.factoryAbi, signer);
                    bytecode = (0, utils_1.buildBytecode)(constructorTypes, constructorArgs, contractBytecode);
                    return [4 /*yield*/, factory.deploy(bytecode, saltHex)];
                case 1: return [4 /*yield*/, (_d.sent()).wait()];
                case 2:
                    result = _d.sent();
                    computedAddr = (0, utils_1.buildCreate2Address)(saltHex, bytecode);
                    logs = (0, utils_1.parseEvents)(result, factory.interface, 'Deployed');
                    addr = logs[0].args.addr.toLowerCase();
                    assert_1.default.strictEqual(addr, computedAddr);
                    return [2 /*return*/, {
                            txHash: result.transactionHash,
                            address: addr,
                            receipt: result,
                        }];
            }
        });
    });
}
exports.deployContract = deployContract;
/**
 * Calculate create2 address of a contract.
 *
 * Calculates deterministic create2 address locally.
 *
 */
function getCreate2Address(_a) {
    var salt = _a.salt, contractBytecode = _a.contractBytecode, _b = _a.constructorTypes, constructorTypes = _b === void 0 ? [] : _b, _c = _a.constructorArgs, constructorArgs = _c === void 0 ? [] : _c;
    return (0, utils_1.buildCreate2Address)((0, utils_1.saltToHex)(salt), (0, utils_1.buildBytecode)(constructorTypes, constructorArgs, contractBytecode));
}
exports.getCreate2Address = getCreate2Address;
/**
 * Determine if a given contract is deployed.
 *
 * Determines if a given contract is deployed at the address provided.
 *
 */
function isDeployed(address, provider) {
    return __awaiter(this, void 0, void 0, function () {
        var code;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getCode(address)];
                case 1:
                    code = _a.sent();
                    return [2 /*return*/, code.slice(2).length > 0];
            }
        });
    });
}
exports.isDeployed = isDeployed;
/**
 * Deploy create2 factory for local development.
 *
 * Deploys the create2 factory locally for development purposes. Requires funding address `0x2287Fa6efdEc6d8c3E0f4612ce551dEcf89A357A` with eth to perform deployment.
 *
 */
function deployFactory(provider) {
    return __awaiter(this, void 0, void 0, function () {
        var key, signer, Factory, factory;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = '0x563905A5FBF71C05A44BE9240E62DBD777D69A2E20D702AA584841AF7C04E939';
                    signer = new ethers_1.ethers.Wallet(key, provider);
                    Factory = new ethers_1.ethers.ContractFactory(utils_1.factoryAbi, utils_1.factoryBytecode, signer);
                    return [4 /*yield*/, Factory.deploy()];
                case 1:
                    factory = _a.sent();
                    assert_1.default.strictEqual(factory.address, utils_1.factoryAddress);
                    return [2 /*return*/, factory.address];
            }
        });
    });
}
exports.deployFactory = deployFactory;

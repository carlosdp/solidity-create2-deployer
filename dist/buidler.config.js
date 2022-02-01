"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("@nomiclabs/buidler/config");
(0, config_1.usePlugin)('@nomiclabs/buidler-ethers');
(0, config_1.usePlugin)('@nomiclabs/buidler-waffle');
exports.default = {
    solc: {
        version: '0.5.17',
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const value_1 = require("./value");
const add_1 = require("./add");
const sub_1 = require("./sub");
const A = (0, value_1.default)(1);
const B = (0, value_1.default)(2);
const C = (0, value_1.default)(5);
console.log((0, add_1.default)(A, (0, add_1.default)(C, B)).value);
console.log((0, add_1.default)(A, 100).value);
console.log((0, sub_1.default)(C, A).value);
console.log((0, sub_1.default)((0, add_1.default)(C, B), A).value);
console.log((0, sub_1.default)(100, 101).value);
console.log((0, add_1.default)((0, sub_1.default)((0, add_1.default)(C, B), A), 100).value);

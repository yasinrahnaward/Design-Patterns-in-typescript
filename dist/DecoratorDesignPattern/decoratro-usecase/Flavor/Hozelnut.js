"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HazelnutFalvor_coffee;
Object.defineProperty(exports, "__esModule", { value: true });
class HazelnutFalvor {
    constructor(coffee) {
        _HazelnutFalvor_coffee.set(this, void 0);
        __classPrivateFieldSet(this, _HazelnutFalvor_coffee, coffee, "f");
    }
    getdicription() {
        return __classPrivateFieldGet(this, _HazelnutFalvor_coffee, "f").getdicription() + " + " + " Hazelnut Falvor";
    }
    Cost() {
        return __classPrivateFieldGet(this, _HazelnutFalvor_coffee, "f").Cost() + 1.04;
    }
}
_HazelnutFalvor_coffee = new WeakMap();
exports.default = HazelnutFalvor;

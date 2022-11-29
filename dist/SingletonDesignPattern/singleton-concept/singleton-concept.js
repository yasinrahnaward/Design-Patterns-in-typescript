"use strict";
// Singleton Concept Sample Code
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Singleton_instance;
class Singleton {
    constructor() {
    }
    ;
    static getInstance() {
        if (!__classPrivateFieldGet(Singleton, _a, "f", _Singleton_instance)) {
            return __classPrivateFieldSet(Singleton, _a, new Singleton(), "f", _Singleton_instance);
        }
        return __classPrivateFieldGet(this, _a, "f", _Singleton_instance);
    }
    // logic
    Print() {
        console.log("Yasin Rahnaward");
    }
}
_a = Singleton;
_Singleton_instance = { value: void 0 };
// The Client
// All uses of the singleton point to the same original object
const OBJECT1 = Singleton.getInstance(); // setting its id property to 1
const OBJECT2 = Singleton.getInstance(); // setting its id property to 2
console.log(OBJECT1 === OBJECT2); // = true

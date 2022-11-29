"use strict";
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
var _a, _Leaderboard_instance, _Leaderboard_table;
Object.defineProperty(exports, "__esModule", { value: true });
class Leaderboard {
    //private constructor
    constructor() {
        _Leaderboard_table.set(this, {});
    }
    // stattic getinstance method
    static getinstance() {
        if (!__classPrivateFieldGet(Leaderboard, _a, "f", _Leaderboard_instance)) {
            return (__classPrivateFieldSet(Leaderboard, _a, new Leaderboard(), "f", _Leaderboard_instance));
        }
        return __classPrivateFieldGet(Leaderboard, _a, "f", _Leaderboard_instance);
    }
    // add winner
    addWinner(position, name) {
        __classPrivateFieldGet(this, _Leaderboard_table, "f")[position] = name;
    }
    //print winner
    print() {
        console.log("******************** LeaderBoard*******************");
        for (const item in __classPrivateFieldGet(this, _Leaderboard_table, "f")) {
            console.log(`|\t${item}\t|\t${__classPrivateFieldGet(this, _Leaderboard_table, "f")[item]}\t|`);
        }
        console.log();
    }
}
_a = Leaderboard, _Leaderboard_table = new WeakMap();
// static interal instance refrence
_Leaderboard_instance = { value: void 0 };
exports.default = Leaderboard;

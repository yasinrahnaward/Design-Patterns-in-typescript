"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _context_position;
Object.defineProperty(exports, "__esModule", { value: true });
class context {
    constructor() {
        _context_position.set(this, [0, 0]);
    }
    move(movestrategy) {
        new movestrategy().move(__classPrivateFieldGet(this, _context_position, "f"));
    }
}
exports.default = context;
_context_position = new WeakMap();

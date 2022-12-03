"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DataController_subsriber;
Object.defineProperty(exports, "__esModule", { value: true });
class DataController {
    constructor() {
        _DataController_subsriber.set(this, new Set());
        if (DataController.instance) {
            return DataController.instance;
        }
        DataController.instance = this;
    }
    subscribe(subscriber) {
        __classPrivateFieldGet(this, _DataController_subsriber, "f").add(subscriber);
    }
    unSubscribe(subscriber) {
        __classPrivateFieldGet(this, _DataController_subsriber, "f").delete(subscriber);
    }
    notify(data) {
        __classPrivateFieldGet(this, _DataController_subsriber, "f").forEach(item => {
            item.notify(data);
        });
    }
}
exports.default = DataController;
_DataController_subsriber = new WeakMap();

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
var _DataModel_subscrib, _DataModel_datacontroller, _DataModel_counter;
Object.defineProperty(exports, "__esModule", { value: true });
const DataController_1 = require("../Controller/DataController");
class DataModel {
    constructor() {
        _DataModel_subscrib.set(this, {});
        _DataModel_datacontroller.set(this, void 0);
        _DataModel_counter.set(this, void 0);
        __classPrivateFieldSet(this, _DataModel_counter, 0, "f");
        __classPrivateFieldSet(this, _DataModel_datacontroller, new DataController_1.default(), "f");
        __classPrivateFieldGet(this, _DataModel_datacontroller, "f").subscribe(this);
    }
    subscribe(subscriber) {
        var _a;
        __classPrivateFieldSet(this, _DataModel_counter, (_a = __classPrivateFieldGet(this, _DataModel_counter, "f"), _a++, _a), "f");
        __classPrivateFieldGet(this, _DataModel_subscrib, "f")[__classPrivateFieldGet(this, _DataModel_counter, "f")] = subscriber;
        return __classPrivateFieldGet(this, _DataModel_counter, "f");
    }
    unSubscribe(subscriberID) {
        delete __classPrivateFieldGet(this, _DataModel_subscrib, "f")[subscriberID];
    }
    notify(data) {
        Object.keys(__classPrivateFieldGet(this, _DataModel_subscrib, "f")).forEach(item => {
            __classPrivateFieldGet(this, _DataModel_subscrib, "f")[parseInt(item)].notify(data);
        });
    }
}
exports.default = DataModel;
_DataModel_subscrib = new WeakMap(), _DataModel_datacontroller = new WeakMap(), _DataModel_counter = new WeakMap();

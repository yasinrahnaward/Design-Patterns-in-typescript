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
var _TableDataView_publisher, _TableDataView_id;
Object.defineProperty(exports, "__esModule", { value: true });
class TableDataView {
    constructor(publisher) {
        _TableDataView_publisher.set(this, void 0);
        _TableDataView_id.set(this, void 0);
        __classPrivateFieldSet(this, _TableDataView_publisher, publisher, "f");
        __classPrivateFieldSet(this, _TableDataView_id, __classPrivateFieldGet(this, _TableDataView_publisher, "f").subscribe(this), "f");
    }
    notify(data) {
        console.log(`Table Data View, ${__classPrivateFieldGet(this, _TableDataView_id, "f")}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a table  Data View :  ${JSON.stringify(data)}`);
    }
    delete() {
        __classPrivateFieldGet(this, _TableDataView_publisher, "f").unSubscribe(__classPrivateFieldGet(this, _TableDataView_id, "f"));
    }
}
exports.default = TableDataView;
_TableDataView_publisher = new WeakMap(), _TableDataView_id = new WeakMap();

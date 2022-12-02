"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class _Sub {
    constructor(value1, value2) {
        const left = Object.prototype.hasOwnProperty.call(value1, "value")
            ? value1.value
            : value1;
        const right = Object.prototype.hasOwnProperty.call(value2, "value")
            ? value2.value
            : value2;
        this.value = right - left;
    }
}
function Sub(item1, item2) {
    return new _Sub(item1, item2);
}
exports.default = Sub;

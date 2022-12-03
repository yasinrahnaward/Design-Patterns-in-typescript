"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Iterator {
    constructor(item) {
        this.index = 0;
        this.item = item;
    }
    next() {
        if (this.index < this.item.length) {
            const item = this.item[this.index];
            this.index += 1;
            return item;
        }
        throw new Error("Method not implemented.");
    }
    hasNext() {
        return this.index < this.item.length;
    }
}
exports.default = Iterator;

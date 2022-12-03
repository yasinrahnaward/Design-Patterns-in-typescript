"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observe {
    constructor(observable) {
        observable.Subscrib(this);
    }
    notify(...args) {
        console.log(`subscriber : receive ${JSON.stringify(args)}`);
    }
}
exports.default = Observe;

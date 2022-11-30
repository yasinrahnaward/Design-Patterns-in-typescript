"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class walking {
    move(postion) {
        postion[0] += 1;
        postion[1] += 1;
        console.log(`I am walking at postion ${postion}`);
    }
}
exports.default = walking;

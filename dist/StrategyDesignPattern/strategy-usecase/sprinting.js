"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sprinting {
    move(postion) {
        postion[0] += 1;
        postion[1] += 1;
        console.log(`I am sprinting at postion ${postion}`);
    }
}
exports.default = sprinting;

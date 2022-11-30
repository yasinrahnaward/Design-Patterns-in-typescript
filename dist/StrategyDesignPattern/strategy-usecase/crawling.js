"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class crawling {
    move(postion) {
        postion[0] += 0.2;
        postion[1] += 0.2;
        console.log(`I am crawling at postion ${postion}`);
    }
}
exports.default = crawling;

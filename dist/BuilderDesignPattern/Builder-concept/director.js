"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
class Director {
    constructor() {
        return new builder_1.default()
            .buildpartA()
            .buildpartB()
            .buildpartC()
            .buildpartD()
            .getUrl();
    }
}
exports.default = Director;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("./url");
class builder {
    constructor() {
        this.url = new url_1.default();
    }
    buildpartA() {
        this.url.parts.push("a");
        return this;
    }
    buildpartB() {
        this.url.parts.push("b");
        return this;
    }
    buildpartC() {
        this.url.parts.push("c");
        return this;
    }
    buildpartD() {
        this.url.parts.push("d");
        return this;
    }
    getUrl() {
        return this.url.parts;
    }
}
exports.default = builder;

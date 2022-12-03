"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("./Pizza");
class GreekPizza extends Pizza_1.default {
    Bake() {
        console.log("Greek Pizza Baked");
    }
}
exports.default = GreekPizza;

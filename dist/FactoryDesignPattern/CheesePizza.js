"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("./Pizza");
class CheesePizza extends Pizza_1.default {
    Bake() {
        console.log("cheese pizza Baked");
    }
}
exports.default = CheesePizza;

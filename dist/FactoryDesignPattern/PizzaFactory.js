"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheesePizza_1 = require("./CheesePizza");
const GreekPizza_1 = require("./GreekPizza");
class PizzaFactory {
    CreatePizza(pizza) {
        if (pizza instanceof (CheesePizza_1.default)) {
            pizza = new CheesePizza_1.default();
        }
        if (pizza instanceof (GreekPizza_1.default)) {
            pizza = new GreekPizza_1.default();
        }
        return pizza;
    }
}
exports.default = PizzaFactory;

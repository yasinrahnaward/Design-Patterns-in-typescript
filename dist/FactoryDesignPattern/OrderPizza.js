"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaFactory_1 = require("./PizzaFactory");
class PizzaOrder {
    Order(pizza) {
        const factory = new PizzaFactory_1.default();
        pizza = factory.CreatePizza(pizza);
        pizza.Prepare();
        pizza.Bake();
        pizza.Cut();
        pizza.Box();
    }
}
exports.default = PizzaOrder;

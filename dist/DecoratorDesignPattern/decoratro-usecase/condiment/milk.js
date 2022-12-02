"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const condimentDecorator_1 = require("./condimentDecorator");
class milk extends condimentDecorator_1.default {
    milk(beverage) {
        this.beverage = beverage;
    }
    getdicription() {
        if (this.beverage == null)
            throw new Error("no coffee ");
        else
            return this.beverage.getdicription() + "milk";
    }
    Cost() {
        if (this.beverage == null) {
            throw new Error("no coffee ");
        }
        else {
            return this.beverage.Cost() + .80;
        }
    }
}
exports.default = milk;

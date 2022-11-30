"use strict";
// first concert algorithm
class strategyOne {
    logic() {
        return "I am strategy One";
    }
}
// second concret algorithm
class strategyTwo {
    logic() {
        return "I am Strategy Two";
    }
}
// third concret algorithm
class strategyThree {
    logic() {
        return " I an strategy thred";
    }
}
class StrategyContext {
    request(algorithm) {
        return new algorithm;
    }
}
//clinet
const OBJ = new StrategyContext();
console.log(OBJ.request(strategyOne).logic());
console.log(OBJ.request(strategyTwo).logic());
console.log(OBJ.request(strategyThree).logic());
// console.log(OBJ.request(strategyTwo).logic())
// console.log(OBJ.request(strategyThree).logic())

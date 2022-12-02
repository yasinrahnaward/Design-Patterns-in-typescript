"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// coffees
const Espresso_1 = require("./coffee/Espresso");
const Americano_1 = require("./coffee/Americano");
const Mocha_1 = require("./coffee/Mocha");
//falvors
const Hozelnut_1 = require("./Flavor/Hozelnut");
const FrenechVanilla_1 = require("./Flavor/FrenechVanilla");
const espresso = new Espresso_1.default();
console.log(espresso.getdicription());
console.log(espresso.Cost());
//Americano coffee
const americano = new Americano_1.default();
console.log(americano.getdicription());
console.log(americano.Cost());
//Mocha coffee
const mocha = new Mocha_1.default();
console.log(mocha.getdicription());
console.log(mocha.Cost());
// add falvor to coffee
console.log("********************************");
console.log();
console.log();
let falvor = new Hozelnut_1.default(espresso);
console.log(falvor.Cost());
console.log(falvor.getdicription());
falvor = new Hozelnut_1.default(falvor);
console.log(falvor.Cost());
console.log(falvor.getdicription());
const newfalvor = new FrenechVanilla_1.default(falvor);
console.log(newfalvor.Cost());
console.log(newfalvor.getdicription());

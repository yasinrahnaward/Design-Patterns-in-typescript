"use strict";
// Decorator Concept Sample Code
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Hazelnut_object;
class Espresso {
    discription() {
        return "Espresso coffee.";
    }
    cost() {
        return 2;
    }
}
class Mocha {
    discription() {
        return "Mocha coffee.";
    }
    cost() {
        return 1;
    }
}
class Hazelnut {
    constructor(object) {
        _Hazelnut_object.set(this, void 0);
        __classPrivateFieldSet(this, _Hazelnut_object, object, "f");
    }
    discription() {
        return `${__classPrivateFieldGet(this, _Hazelnut_object, "f").discription()} + hazelnut Flavor`;
    }
    cost() {
        return __classPrivateFieldGet(this, _Hazelnut_object, "f").cost() + 1.2;
    }
}
_Hazelnut_object = new WeakMap();
// The Client
const EspressoCoffee = new Espresso();
console.log(EspressoCoffee.discription());
console.log(EspressoCoffee.cost());
// The component can be decorated
let flavor = new Hazelnut(EspressoCoffee);
console.log(flavor.cost());
console.log(flavor.discription());
flavor = new Hazelnut(flavor);
console.log(flavor.cost());
console.log(flavor.discription());
flavor = new Hazelnut(flavor);
console.log(flavor.cost());
console.log(flavor.discription());
// // The decorated component can be decorated again
// const Decorated2 = new Decorator(Decorated)
// console.log(Decorated2.method())

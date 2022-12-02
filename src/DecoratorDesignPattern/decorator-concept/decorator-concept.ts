// Decorator Concept Sample Code

interface IComponent {
    discription(): string;
    cost():number;
}

class Espresso implements IComponent {
    discription(): string {
        return "Espresso coffee."
    }
    cost(): number {
        return 2;
    }
}
class Mocha implements IComponent {
    discription(): string {
        return "Mocha coffee."
    }
    cost(): number {
        return 1;
    }
}

class Hazelnut implements IComponent {
    #object: IComponent

    constructor(object: IComponent) {
        this.#object = object
    }
    discription(): string {
        return `${this.#object.discription()} + hazelnut Flavor`
    }
    cost(): number {
        return this.#object.cost()+1.2;
    }
}

// The Client
const EspressoCoffee = new Espresso()
console.log(EspressoCoffee.discription())
console.log(EspressoCoffee.cost())

// The component can be decorated
let flavor = new Hazelnut(EspressoCoffee)
console.log(flavor.cost())
console.log(flavor.discription())

flavor = new Hazelnut(flavor)
console.log(flavor.cost())
console.log(flavor.discription())
flavor = new Hazelnut(flavor)
console.log(flavor.cost())
console.log(flavor.discription())

// // The decorated component can be decorated again
// const Decorated2 = new Decorator(Decorated)
// console.log(Decorated2.method())
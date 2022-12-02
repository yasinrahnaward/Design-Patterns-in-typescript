// coffees
import Espresso from "./coffee/Espresso";
import Americano from "./coffee/Americano";
import Mocha from "./coffee/Mocha";

//falvors
import HazelnutFalvor from "./Flavor/Hozelnut";
import FrenechVanillaFalvor from "./Flavor/FrenechVanilla";
const espresso =new Espresso();
console.log(espresso.getdicription())
console.log(espresso.Cost())
//Americano coffee
const americano =new Americano();
console.log(americano.getdicription())
console.log(americano.Cost())
//Mocha coffee
const mocha =new Mocha();
console.log(mocha.getdicription())
console.log(mocha.Cost())

// add falvor to coffee
console.log("********************************")

console.log()
console.log()

let falvor=new HazelnutFalvor(espresso)
console.log(falvor.Cost())
console.log(falvor.getdicription())

falvor=new HazelnutFalvor(falvor)
console.log(falvor.Cost())
console.log(falvor.getdicription())

const newfalvor=new FrenechVanillaFalvor(falvor)
console.log(newfalvor.Cost())
console.log(newfalvor.getdicription())




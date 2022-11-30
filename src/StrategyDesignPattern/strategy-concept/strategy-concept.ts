// strategy interface
interface IStrategy{
    logic():string;
}

// first concert algorithm
class strategyOne implements IStrategy{
    logic(): string {
        return "I am strategy One";
    }
}

// second concret algorithm
class strategyTwo implements IStrategy{
    logic(): string {
        return "I am Strategy Two";
    }
}
// third concret algorithm
class strategyThree implements IStrategy{
    logic(): string {
        return " I an strategy thred";
    }
}

// strategy interface constructor
interface IStrategyContructor{
    new():IStrategy;
}
class StrategyContext{
    
    request(algorithm:IStrategyContructor)
    {
        return new algorithm;
    }
}


//clinet
const OBJ=new StrategyContext();
console.log(OBJ.request(strategyOne).logic())
console.log(OBJ.request(strategyTwo).logic())
console.log(OBJ.request(strategyThree).logic())
// console.log(OBJ.request(strategyTwo).logic())
// console.log(OBJ.request(strategyThree).logic())

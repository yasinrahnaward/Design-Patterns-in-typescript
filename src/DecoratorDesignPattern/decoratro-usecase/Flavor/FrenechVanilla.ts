import ICofee from "../coffee/ICofee";
class FrenechVanillaFalvor implements ICofee{
    #coffee:ICofee
    constructor(coffee:ICofee)
    {
        this.#coffee=coffee
    }
    getdicription(): string {
        return this.#coffee.getdicription()+" + "+"Frenech Vanilla Falvor";
    }
    Cost(): number {
        return this.#coffee.Cost()+2.2;
    }
}



export default FrenechVanillaFalvor
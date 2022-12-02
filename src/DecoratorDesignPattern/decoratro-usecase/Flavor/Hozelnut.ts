import ICofee from "../coffee/ICofee";
class HazelnutFalvor implements ICofee {
    #coffee:ICofee
    constructor(coffee:ICofee)
    {
        this.#coffee=coffee;
    }
    getdicription(): string {
        return this.#coffee.getdicription()+" + "+" Hazelnut Falvor";
    }
    Cost(): number {
       return this.#coffee.Cost()+1.04;
    }
}
export default HazelnutFalvor
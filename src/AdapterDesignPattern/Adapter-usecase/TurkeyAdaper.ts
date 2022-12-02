import IDuk from "./IDuk";
import ITurkey from "./ITurkey";
export default class TurkeyAdapter implements IDuk{
    #turkey:ITurkey;
    constructor(turkey:ITurkey)
    {
        this.#turkey=turkey;
    }
    Fly(): void {
        for (let i = 0; i < 5; i++) {
            this.#turkey.Fly();
        }
    }
    Quak(): void {
       this.#turkey.Globble();
    }
    
}
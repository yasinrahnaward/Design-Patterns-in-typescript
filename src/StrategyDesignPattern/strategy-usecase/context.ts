import { ImoveConstructor } from "./Imove"
export default class context {
    #position:[number,number]=[0,0]
    move(movestrategy:ImoveConstructor){
         new movestrategy().move(this.#position);
    }
}
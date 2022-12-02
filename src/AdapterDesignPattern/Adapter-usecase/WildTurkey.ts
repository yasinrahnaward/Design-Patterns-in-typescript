import ITurkey from "./ITurkey";
export default class WildTurkey implements ITurkey{
    Fly(): void {
        console.log("Turkey flies")
    }
    Globble(): void {
        console.log("Turkey Gobbles")
    }
    
}
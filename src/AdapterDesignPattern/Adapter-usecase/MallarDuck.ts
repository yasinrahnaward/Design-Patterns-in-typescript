import IDuk from "./IDuk";
export default class MallarDuk implements IDuk{
    Fly(): void {
        console.log("Mallar Duk flies")
    }
    Quak(): void {
        console.log("Mallar Duk quacks")
    }
    
}
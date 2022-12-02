import ICofee from "./ICofee";
 export default class Mocha implements ICofee{
    getdicription(): string {
        return "MoCha Coffee"
    }
    Cost(): number {
       return 4.22;
    }
}

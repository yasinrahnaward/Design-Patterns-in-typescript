import { Imove } from "./Imove";
class walking implements Imove{
    move(postion: [number, number]): void {
        postion[0]+=1;
        postion[1]+=1;
        console.log(`I am walking at postion ${postion}`);
    }
}
 export default walking
import { Imove } from "./Imove";
class crawling implements Imove{
    move(postion: [number, number]): void {
        postion[0]+=0.2;
        postion[1]+=0.2;
        console.log(`I am crawling at postion ${postion}`);
    }
}
 export default crawling
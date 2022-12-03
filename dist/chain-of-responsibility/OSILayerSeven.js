"use strict";
// A dispenser of £10 notes
Object.defineProperty(exports, "__esModule", { value: true });
// export default class OSILayerSeven implements OSILayer {
//     // Dispenses £10s if applicable, otherwise continues to next successor
//     #successor: IDispenser | undefined
//     nextSuccessor(successor: IDispenser): void {
//         // Set the next successor
//         this.#successor = successor
//     }
//     handle(amount: number): void {
//         // Handle the dispensing of notes"
//         if (amount >= 10) {
//             const num = Math.floor(amount / 10)
//             const remainder = amount % 10
//             console.log(`Dispensing ${num} £10 note`)
//             if (remainder !== 0) {
//                 (this.#successor as IDispenser).handle(remainder)
//             }
//         } else {
//             (this.#successor as IDispenser).handle(amount)
//         }
//     }
// }
class OSILayerSeven {
    nextLayer(layer) {
        this.layer = layer;
    }
    handle(Data) {
        if (Data[0] == "Data") {
            Data.unshift("L7H");
            console.log(`OSILayerOne layer 7 = ${Data}`);
            this.layer.handle(Data);
        }
        else {
            console.log("oops something is wrong, error happend in Seventh layer");
        }
    }
}
exports.default = OSILayerSeven;

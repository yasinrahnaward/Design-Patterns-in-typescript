"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OSILayerFirst {
    nextLayer(layer) {
        this.layer = layer;
    }
    handle(Data) {
        if (Data[0] == "L2H" && Data != undefined) {
            Data.unshift("L1H");
            console.log(`OSILayerOne layer 1 = ${Data}`);
        }
        else {
            console.log("oops something is wrong, error happend in first layer");
        }
    }
}
exports.default = OSILayerFirst;

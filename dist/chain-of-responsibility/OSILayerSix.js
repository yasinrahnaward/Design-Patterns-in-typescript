"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OSILayerSix {
    nextLayer(layer) {
        this.layer = layer;
    }
    handle(Data) {
        if (Data[0] == "L7H") {
            Data.unshift("L6H");
            console.log(`OSILayerOne layer 6 = ${Data}`);
            this.layer.handle(Data);
        }
        else {
            console.log("oops something is wrong, error happend in sixth layer");
        }
    }
}
exports.default = OSILayerSix;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OSILayerSecond {
    nextLayer(layer) {
        this.layer = layer;
    }
    handle(Data) {
        if (Data[0] == "L3H") {
            Data.unshift("L2H");
            console.log(`OSILayerOne layer 2 = ${Data}`);
            this.layer.handle(Data);
        }
        else {
            console.log("oops something is wrong, error happend in second layer");
        }
    }
}
exports.default = OSILayerSecond;

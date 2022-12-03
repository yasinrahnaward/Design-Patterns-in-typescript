"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OSILayerFourth {
    nextLayer(layer) {
        this.layer = layer;
    }
    handle(Data) {
        if (Data[0] == "L5H") {
            Data.unshift("L4H");
            console.log(`OSILayerOne layer 4 = ${Data}`);
            this.layer.handle(Data);
        }
        else {
            console.log("oops something is wrong, error happend in Fourth layer");
        }
    }
}
exports.default = OSILayerFourth;

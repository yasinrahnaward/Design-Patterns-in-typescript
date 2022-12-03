"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OSILayerThird {
    nextLayer(layer) {
        this.layer = layer;
    }
    handle(Data) {
        if (Data[0] == "L4H") {
            Data.unshift("L3H");
            console.log(`OSILayerOne layer 3 = ${Data}`);
            this.layer.handle(Data);
        }
        else {
            console.log("oops something is wrong, error happend in third layer");
        }
    }
}
exports.default = OSILayerThird;

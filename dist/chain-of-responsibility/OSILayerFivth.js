"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OSILayerFivth {
    nextLayer(layer) {
        this.layer = layer;
    }
    handle(Data) {
        if (Data[0] == "L6H") {
            Data.unshift("L5H");
            console.log(`OSILayerOne layer 5 = ${Data}`);
            this.layer.handle(Data);
        }
        else {
            console.log("oops something is wrong, error happend in sixth layer");
        }
    }
}
exports.default = OSILayerFivth;

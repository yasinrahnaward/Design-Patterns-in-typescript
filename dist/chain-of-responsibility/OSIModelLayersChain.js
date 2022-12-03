"use strict";
// The ATM Dispenser Chain
Object.defineProperty(exports, "__esModule", { value: true });
const OSILayerSeven_1 = require("./OSILayerSeven");
const OSILayerSix_1 = require("./OSILayerSix");
const OSILayerFivth_1 = require("./OSILayerFivth");
const OSILayerFourth_1 = require("./OSILayerFourth");
const OSILayerThird_1 = require("./OSILayerThird");
const OSILayerSecond_1 = require("./OSILayerSecond");
const OSILayerFirst_1 = require("./OSILayerFirst");
class OSIModelLayersChain {
    constructor() {
        // initializing the successors chain
        this.chain1 = new OSILayerSeven_1.default();
        this.chain2 = new OSILayerSix_1.default();
        this.chain3 = new OSILayerFivth_1.default();
        this.chain4 = new OSILayerFourth_1.default();
        this.chain5 = new OSILayerThird_1.default();
        this.chain6 = new OSILayerSecond_1.default();
        this.chain7 = new OSILayerFirst_1.default();
        // Setting a default successor chain that will process the 50s first,
        // the 20s second and the 10s last.The successor chain will be
        // recalculated dynamically at runtime.
        this.chain1.nextLayer(this.chain2);
        this.chain2.nextLayer(this.chain3);
        this.chain3.nextLayer(this.chain4);
        this.chain4.nextLayer(this.chain5);
        this.chain5.nextLayer(this.chain6);
        this.chain6.nextLayer(this.chain7);
    }
}
exports.default = OSIModelLayersChain;

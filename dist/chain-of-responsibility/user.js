"use strict";
// An ATM Dispenser that dispenses denominations of notes
Object.defineProperty(exports, "__esModule", { value: true });
const OSIModelLayersChain_1 = require("./OSIModelLayersChain");
const layer = new OSIModelLayersChain_1.default();
const Data = ["Data"];
if (Data[0] == "L1H") {
    console.log(" its done");
}
else {
    layer.chain1.handle(Data);
}

// An ATM Dispenser that dispenses denominations of notes

import OSIModelLayersChain from "./OSIModelLayersChain";
const layer=new OSIModelLayersChain();
const Data:string[] = ["Data"];
if (Data[0]=="L1H") {
  console.log(" its done")
}
else{
  layer.chain1.handle(Data);
}

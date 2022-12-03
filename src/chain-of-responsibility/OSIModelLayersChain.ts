// The ATM Dispenser Chain

import OSILayerSeven from "./OSILayerSeven"
import OSILayerSix from "./OSILayerSix"
import OSILayerFivth from "./OSILayerFivth"
import OSILayerFourth from "./OSILayerFourth"
import OSILayerThird from "./OSILayerThird"
import OSILayerSecond from "./OSILayerSecond"
import OSILayerFirst from "./OSILayerFirst"

export default class OSIModelLayersChain {
  chain1: OSILayer;
  chain2: OSILayer;
  chain3: OSILayer;
  chain4: OSILayer;
  chain5: OSILayer;
  chain6: OSILayer;
  chain7: OSILayer;

  constructor() {
    // initializing the successors chain
    this.chain1 = new OSILayerSeven();
    this.chain2 = new OSILayerSix();
    this.chain3 = new OSILayerFivth();
    this.chain4 = new OSILayerFourth();
    this.chain5 = new OSILayerThird();
    this.chain6 = new OSILayerSecond();
    this.chain7 = new OSILayerFirst();
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

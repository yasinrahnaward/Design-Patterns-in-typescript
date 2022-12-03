export default class OSILayerThird implements OSILayer {
    layer: OSILayer | undefined;
    nextLayer(layer: OSILayer): void {
      this.layer = layer;
    }
    handle(Data: string[]): void {
      if (Data[0] == "L4H") {
        Data.unshift("L3H");
        console.log(`OSILayerOne layer 3 = ${Data}`);
        (this.layer as OSILayer).handle(Data);
      } else {
        console.log("oops something is wrong, error happend in third layer");
      }
    }
  }
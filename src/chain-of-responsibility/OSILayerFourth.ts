export default class OSILayerFourth implements OSILayer {
    layer: OSILayer | undefined;
    nextLayer(layer: OSILayer): void {
      this.layer = layer;
    }
    handle(Data: string[]): void {
      if (Data[0] == "L5H") {
        Data.unshift("L4H");
        console.log(`OSILayerOne layer 4 = ${Data}`);
        (this.layer as OSILayer).handle(Data);
      } else {
        console.log("oops something is wrong, error happend in Fourth layer");
      }
    }
  }
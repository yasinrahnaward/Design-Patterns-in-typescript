export default class OSILayerSecond implements OSILayer {
    layer: OSILayer | undefined;
    nextLayer(layer: OSILayer): void {
      this.layer = layer;
    }
    handle(Data: string[]): void {
      if (Data[0] == "L3H") {
        Data.unshift("L2H");
        console.log(`OSILayerOne layer 2 = ${Data}`);
        (this.layer as OSILayer).handle(Data);
      } else {
        console.log("oops something is wrong, error happend in second layer");
      }
    }
  }
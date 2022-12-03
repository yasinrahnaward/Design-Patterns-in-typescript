export default class OSILayerSix implements OSILayer {
    layer: OSILayer | undefined;
    nextLayer(layer: OSILayer): void {
      this.layer = layer;
    }
    handle(Data: string[]): void {
      if (Data[0] == "L7H") {
        Data.unshift("L6H");
        console.log(`OSILayerOne layer 6 = ${Data}`);
        (this.layer as OSILayer).handle(Data);
      } else {
        console.log("oops something is wrong, error happend in sixth layer");
      }
    }
  }
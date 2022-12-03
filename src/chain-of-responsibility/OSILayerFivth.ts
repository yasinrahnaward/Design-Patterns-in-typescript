export default class OSILayerFivth implements OSILayer {
    layer: OSILayer | undefined;
    nextLayer(layer: OSILayer): void {
      this.layer = layer;
    }
    handle(Data: string[]): void {
      if (Data[0] == "L6H") {
        Data.unshift("L5H");
        console.log(`OSILayerOne layer 5 = ${Data}`);
        (this.layer as OSILayer).handle(Data);
      } else {
        console.log("oops something is wrong, error happend in sixth layer");
      }
    }
  }
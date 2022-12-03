export default class OSILayerFirst implements OSILayer {
    layer: OSILayer | undefined;
    nextLayer(layer: OSILayer): void {
      this.layer = layer;
    }
    handle(Data: string[]): void {
      if (Data[0] == "L2H" && Data!=undefined) {
        Data.unshift("L1H");
        console.log(`OSILayerOne layer 1 = ${Data}`);
      } else {
        console.log("oops something is wrong, error happend in first layer");
      }
    }
  }
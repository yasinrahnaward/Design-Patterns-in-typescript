import Url from "./url";
import Ibuilder from "./Ibuilder";
export default class builder implements Ibuilder {
  url: Url;
  constructor() {
    this.url = new Url();
  }
  buildpartA() {
    this.url.parts.push("a");
    return this;
  }
  buildpartB() {
    this.url.parts.push("b");
    return this;
  }
  buildpartC() {
    this.url.parts.push("c");
    return this;
  }
  buildpartD() {
    this.url.parts.push("d");
    return this;
  }
  getUrl() {
    return this.url.parts;
  }
}

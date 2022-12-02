import builder from "./builder";
export default class Director {
  constructor() {
    return new builder()
      .buildpartA()
      .buildpartB()
      .buildpartC()
      .buildpartD()
      .getUrl();
  }
}

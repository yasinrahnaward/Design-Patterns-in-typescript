import Url from "./url";
export default interface Ibuilder{
    buildpartA():this;
    buildpartB():this;
    buildpartC():this;
    buildpartD():this;
    getUrl():string[];
}
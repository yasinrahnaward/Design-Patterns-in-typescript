import IValue from "./IValue";
class _Sub implements IValue {
  value: number;
  constructor(value1: number | IValue, value2: number | IValue) {
    const left = Object.prototype.hasOwnProperty.call(value1, "value")
      ? (value1 as IValue).value
      : (value1 as number);
    const right = Object.prototype.hasOwnProperty.call(value2, "value")
      ? (value2 as IValue).value
      : (value2 as number);

    this.value = right - left;
  }
}

export default function Sub(item1:number|IValue,item2:number|IValue,)
{
    return new _Sub(item1,item2);
}
import ICofee from "./ICofee";
export default class Espresso implements ICofee {
  getdicription(): string {
    return "Espresso Coffe"
  }
  Cost(): number {
    return 1.22;
  }
}

import ICofee from "./ICofee";
export default class Americano implements ICofee {
  getdicription(): string {
    return "Americano Coffee"
  }
  Cost(): number {
    return 2;
  }
}

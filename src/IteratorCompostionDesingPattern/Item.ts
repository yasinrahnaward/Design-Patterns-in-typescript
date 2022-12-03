import IItem from "./IItem";
export default class Item implements IItem {
  firstName: string;
  age: number;
  phone: string;
  collage: string;
  constructor(firstName: string, age: number, phone: string, collage: string) {
    this.firstName=firstName
    this.age=age
    this.phone=phone
    this.collage=collage
  }
  itemInfo(): void {
    console.log("**********************************")
    console.table(this.firstName)
    console.table(this.age)
    console.table(this.phone)
    console.table(this.collage)
  }
}

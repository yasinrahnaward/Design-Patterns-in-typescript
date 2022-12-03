"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(firstName, age, phone, collage) {
        this.firstName = firstName;
        this.age = age;
        this.phone = phone;
        this.collage = collage;
    }
    itemInfo() {
        console.log("**********************************");
        console.table(this.firstName);
        console.table(this.age);
        console.table(this.phone);
        console.table(this.collage);
    }
}
exports.default = Item;

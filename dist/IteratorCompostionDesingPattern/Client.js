"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const Iterator_1 = require("./Iterator");
const list = [
    new Item_1.default('ALi', 22, "076123211", "MCS"),
    new Item_1.default('Ahmad', 23, "07667211", "MCS"),
    new Item_1.default('Zhara', 21, "070823764", "BCS"),
    new Item_1.default('Maryam', 22, "076123411", "MCS"),
    new Item_1.default('Reza', 26, "076123411", "MCS"),
    new Item_1.default('Farhan', 23, "076123211", "BCS"),
    new Item_1.default('Kabir', 19, "07234123211", "MCS"),
    new Item_1.default('Sema', 20, "0702343211", "MCS"),
];
const iterator = new Iterator_1.default(list);
while (iterator.hasNext()) {
    iterator.next().itemInfo();
}

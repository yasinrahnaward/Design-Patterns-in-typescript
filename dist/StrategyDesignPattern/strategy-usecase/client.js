"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crawling_1 = require("./crawling");
const walking_1 = require("./walking");
const context_1 = require("./context");
const obj = new context_1.default();
// obj.move(sprinting);
obj.move(walking_1.default);
obj.move(crawling_1.default);

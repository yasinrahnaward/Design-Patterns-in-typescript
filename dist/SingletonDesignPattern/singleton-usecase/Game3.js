"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Leaderboard_1 = require("./Leaderboard");
class Game3 {
    constructor() {
        this.leaderboard = Leaderboard_1.default.getinstance();
    }
    addwinner(position, name) {
        this.leaderboard.addWinner(position, name);
    }
}
exports.default = Game3;

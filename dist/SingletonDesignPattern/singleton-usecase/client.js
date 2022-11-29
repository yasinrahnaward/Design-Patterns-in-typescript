"use strict";
/**
 *
In the example, there are three games created. They are all independent instances created from
 their own class, but they all share the same leaderboard. The leaderboard is a Singleton.
It doesn't matter how the Games where created, or how they reference the leaderboard,
it is always a Singleton.Each game independently adds a winner, and all games can read
the altered leaderboard regardless of which game updated it.

 */
Object.defineProperty(exports, "__esModule", { value: true });
const Game1_1 = require("./Game1");
const Game2_1 = require("./Game2");
const Game3_1 = require("./Game3");
const gameone = new Game1_1.default;
gameone.addwinner(3, 'game1');
const gametwo = new Game2_1.default;
gametwo.addwinner(1, 'game2');
const gamethree = new Game3_1.default;
gamethree.addwinner(2, 'game3');
gameone.leaderboard.print();
gametwo.leaderboard.print();
gamethree.leaderboard.print();

import crawling from "./crawling";
import sprinting from "./sprinting";
import walking from "./walking";
import context from "./context";
const obj=new context();
// obj.move(sprinting);
obj.move(walking);
obj.move(crawling);

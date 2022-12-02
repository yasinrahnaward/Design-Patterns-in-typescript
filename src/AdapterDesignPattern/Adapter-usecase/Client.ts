import WildTurkey from "./WildTurkey"
import MallarDuk from "./MallarDuck";
import TurkeyAdapter from "./TurkeyAdaper";
import IDuk from "./IDuk";
const duk=new WildTurkey();
const turkey=new TurkeyAdapter(duk)
turkey.Fly();
turkey.Quak();

console.log(duk instanceof MallarDuk)
import MaxPIzza from "./Maxpizza";
import CheesePizza from "./CheesePizza";
import GreekPizza from "./GreekPizza";
import PizzaOrder from "./OrderPizza";

const pizzaorder=new PizzaOrder();
const greekpizz=new GreekPizza();
pizzaorder.Order(greekpizz);

const cheesPizza=new CheesePizza();
pizzaorder.Order(cheesPizza);

const maxpizz=new  MaxPIzza();
pizzaorder.Order(maxpizz);

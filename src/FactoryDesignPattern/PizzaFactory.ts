import Pizza from "./Pizza";
import CheesePizza from "./CheesePizza";
import GreekPizza from "./GreekPizza";
export default class PizzaFactory{
    public CreatePizza(pizza:Pizza):Pizza
    {
        if(pizza instanceof(CheesePizza))
        {
            pizza = new CheesePizza();
        }
        if(pizza instanceof(GreekPizza)){
            pizza=new GreekPizza();
        }
        return pizza;
    }
}
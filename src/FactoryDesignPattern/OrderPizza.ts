import PizzaFactory from "./PizzaFactory";
import Pizza from "./Pizza";
export default class PizzaOrder
{
    public Order(pizza:Pizza):void{
        const factory=new PizzaFactory();
        pizza=factory.CreatePizza(pizza)

        pizza.Prepare()
        pizza.Bake()
        pizza.Cut()
        pizza.Box()
    }
}
import Pizza from "../interface/Pizza";
import PizzaStore from "../interface/PizzaStore";
import NYStyleCheesePizza from "./NYStyleCheesePizza";

export default class NYStylePizzaStore extends PizzaStore {
  public createPizza(type: string,toppings:string[]): Pizza {
    switch (type) {
      case "cheese":
        return new NYStyleCheesePizza(toppings);
      default:
        return null;
    }
  }
}

import Pizza from "../interface/Pizza";
import PizzaStore from "../interface/PizzaStore";
import NYStyleCheesePizza from "./NYStyleCheesePizza";

export default class NYStylePizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    switch (type) {
      case "cheese":
        return new NYStyleCheesePizza();
        break;
      default:
        return undefined;
        break;
    }
  }
}

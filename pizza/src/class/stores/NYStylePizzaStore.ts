import Pizza from "../../interface/Pizza";
import PizzaStore from "../../interface/PizzaStore";
import NYPizzaIngredientFactory from "../factories/NYPizzaIngredientFactory";
import CheesePizza from "../pizza/CheesePizza";

export default class NYStylePizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    const pizzaIngredientFactory = new NYPizzaIngredientFactory();
    switch (type) {
      case "cheese":
        return new CheesePizza("NY Style Cheese Pizza", pizzaIngredientFactory);
      default:
        return null;
    }
  }
}

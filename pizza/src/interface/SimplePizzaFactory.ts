import Pizza from "./Pizza";

export default abstract class SimplePizzaFactory {
  public pizza: Pizza;
  constructor(p: Pizza) {
    this.pizza = p;
  }
}

import Pizza from "./Pizza";

export default abstract class PizzaStore {
  public orderPizza(type: string, toppings: string[]): Pizza {
    const pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  // Factory method
  public abstract createPizza(type: string): Pizza;
}

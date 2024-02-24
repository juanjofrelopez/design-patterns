import Pizza from "./Pizza";

export default abstract class PizzaStore {
  
  public orderPizza(type: string): Pizza {
    const pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  public abstract createPizza(type: string): Pizza;
}

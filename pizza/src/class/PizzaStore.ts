import SimplePizzaFactory from "../interface/SimplePizzaFactory";

export default class PizzaStore {
  private simplePizzaFactory: SimplePizzaFactory;
  constructor(s: SimplePizzaFactory) {
    this.simplePizzaFactory = s;
  }

  public orderPizza(): void {}
}

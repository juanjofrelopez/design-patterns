import Beverage from "../../interface/Beverage";
import CondimentDecorator from "../../interface/CondimentDecorator";
export default class Whip extends CondimentDecorator {
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
  
  getDescription(): string {
    return this.beverage.getDescription().concat("\nThis also has Whip.");
  }
}

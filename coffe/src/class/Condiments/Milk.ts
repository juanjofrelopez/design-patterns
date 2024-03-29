import Beverage from "../../interface/Beverage";
import CondimentDecorator from "../../interface/CondimentDecorator";
import { ESize, milkSizeCosts } from "../../constants";
export default class Milk extends CondimentDecorator {
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  cost(): number {
    return this.beverage.cost() + milkSizeCosts[this.beverage.getSize()];
  }

  getDescription(): string {
    return this.beverage.getDescription().concat("\nThis also has Milk.");
  }
}

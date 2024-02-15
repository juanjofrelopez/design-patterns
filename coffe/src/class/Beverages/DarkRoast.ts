import Beverage from "../../interface/Beverage";

export default class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "This beverage is called Dark Roast";
  }
  getDescription(): string {
    return this.description;
  }
  cost() {
    return 3;
  }
}

import { TSize } from "../../constants";
import Beverage from "../../interface/Beverage";

export default class DarkRoast extends Beverage {
  constructor(s: TSize) {
    super();
    this.description = "This beverage is called Dark Roast";
    this.setSize(s);
  }
  getDescription(): string {
    return this.description;
  }
  cost() {
    return 3;
  }
}

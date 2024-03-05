import Cheese from "../../interface/ingredients/Cheese";

export default class ReggianoCheese implements Cheese {
  getType(): string {
    return "Reggiano cheese!";
  }
}

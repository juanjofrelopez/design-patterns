import Dough from "../../interface/ingredients/Dough";

export default class ThinCrustDough implements Dough {
  getType(): string {
    return "Thin Crust Dough!";
  }
}

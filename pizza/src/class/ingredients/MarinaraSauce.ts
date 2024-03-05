import Sauce from "../../interface/ingredients/Sauce";

export default class MarinaraSauce implements Sauce {
  getType(): string {
    return "Marinara Sauce!";
  }
}

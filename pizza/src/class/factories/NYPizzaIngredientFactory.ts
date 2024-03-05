import PizzaIngredientFactory from "../../interface/PizzaIngredientFactory";
import MarinaraSauce from "../ingredients/MarinaraSauce";
import ReggianoCheese from "../ingredients/ReggianoCheese";
import ThinCrustDough from "../ingredients/ThinCrustDough";

export default class NYPizzaIngredientFactory
  implements PizzaIngredientFactory
{
  createCheese() {
    return new ReggianoCheese();
  }
  createDough() {
    return new ThinCrustDough();
  }
  createSauce() {
    return new MarinaraSauce();
  }
}

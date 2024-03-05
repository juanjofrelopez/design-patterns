import Cheese from "./ingredients/Cheese";
import Dough from "./ingredients/Dough";
import Sauce from "./ingredients/Sauce";

export default interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
}

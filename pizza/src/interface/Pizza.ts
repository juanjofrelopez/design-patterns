import PizzaIngredientFactory from "./PizzaIngredientFactory";
import Cheese from "./ingredients/Cheese";
import Dough from "./ingredients/Dough";
import Sauce from "./ingredients/Sauce";

export default abstract class Pizza {
  public name: string;
  public dough: Dough;
  public sauce: Sauce;
  public cheese: Cheese;
  public ingredientFactory: PizzaIngredientFactory;

  constructor(n: string, f: PizzaIngredientFactory) {
    this.name = n;
    this.ingredientFactory = f;
  }

  public abstract prepare(): void;

  public bake(): void {
    console.log("baking for 25 min at 250!");
  }

  public cut(): void {
    console.log("cutting pizza into diagonal slices!");
  }

  public box(): void {
    console.log("place pizza in the official store box!");
  }
}

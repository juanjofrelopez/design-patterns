import Pizza from "../../interface/Pizza";

export default class CheesePizza extends Pizza {
  // this is where the pizzas are prepared
  // according to each recipe of pizza
  // the ingredients are prepared by each ingredient factory
  // the pizza doesn't care which factory is used
  public prepare(): void {
    console.log("preparing: ",this.name)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
  }
}

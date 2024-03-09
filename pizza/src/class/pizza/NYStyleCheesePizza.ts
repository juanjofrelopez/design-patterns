// import Pizza from "../../interface/Pizza";
// import PizzaIngredientFactory from "../../interface/PizzaIngredientFactory";

// export default class NYStyleCheesePizza extends Pizza {
//   constructor(t: string[],f : PizzaIngredientFactory) {
//     super();
//     this.name = "NY style Cheese pizza";
//     this.toppings = t;
//   }
//   public prepare(): void {
//     console.log("preparing ", this.name);
//     console.log("with these toppings:", ...this.toppings.map((t) => t));
//   }
// }

/**
 * DEPRECATED
 * each pizza ingredient factory will decide the style, not the pizza
 * because we'd be having to implement one class per each style of pizza
 * 
 */

import Pizza from "../../interface/Pizza";

export default class NYStyleCheesePizza extends Pizza {
  constructor(t: string[]) {
    super();
    this.name = "NY style Cheese pizza";
    this.toppings = t;
  }
  public prepare(): void {
    console.log("preparing ", this.name);
    console.log("with these toppings:", ...this.toppings.map((t) => t));
  }
}

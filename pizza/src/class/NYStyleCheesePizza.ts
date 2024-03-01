import Pizza from "../interface/Pizza";

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

  public bake(): void {
    console.log("baking ny style cheese pizza!");
  }

  public cut(): void {
    console.log("cutting ny style cheese pizza!");
  }

  public box(): void {
    console.log("boxing ny style cheese pizza!");
  }
}

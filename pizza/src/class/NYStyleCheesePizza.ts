import Pizza from "../interface/Pizza";

export default class NYStyleCheesePizza implements Pizza {
  public prepare(): void {
    console.log("preparing ny style cheese pizza!\n");
  }

  public bake(): void {
    console.log("baking ny style cheese pizza!\n");
  }

  public cut(): void {
    console.log("cutting ny style cheese pizza!\n");
  }

  public box(): void {
    console.log("boxing ny style cheese pizza!\n");
  }
}

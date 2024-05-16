import Beverage from "../interface/Beverage";

export default class Tea extends Beverage {
  brew(): void {
    console.log("brewing a cup of tea!");
  }
  addCondiments(condiments: string[]): void {
    console.log(
      `Adding this condiments to the cup of tea: ${condiments.join(" and ")} `
    );
  }
}

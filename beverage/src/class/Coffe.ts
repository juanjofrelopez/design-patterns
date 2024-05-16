import Beverage from "../interface/Beverage";

export default class Coffe extends Beverage {
  brew(): void {
    console.log("Brewing coffe!");
  }
  addCondiments(condiments: string[]): void {
    console.log(
      `Adding this condiments to the cup of coffe: ${condiments.join(" and ")} `
    );
  }
}

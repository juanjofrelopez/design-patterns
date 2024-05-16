export default abstract class Beverage {
  public prepareRecipe(condiments: string[]) {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments(condiments);
  }
  // lets asume that brew and addCondiments cna only be implemented in the subsequent ssubclasses
  abstract brew(): void;
  abstract addCondiments(condiments: string[]): void;

  private boilWater(): void {
    console.log("Boiling water!");
  }

  private pourInCup(): void {
    console.log("Pouring in Cup!");
  }
}

export default class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueChocolateBoilerInstance: ChocolateBoiler;

  private constructor() {
    this.boiled = false;
    this.empty = true;
  }

  public getInstance() {
    if (ChocolateBoiler.uniqueChocolateBoilerInstance === null) {
      ChocolateBoiler.uniqueChocolateBoilerInstance = new ChocolateBoiler();
    }
    return ChocolateBoiler.uniqueChocolateBoilerInstance;
  }

  public fill(): void {
    if (this.getEmpty) {
      this.empty = false;
      this.boiled = false;
    }
  }

  private getEmpty(): boolean {
    return this.empty;
  }

  private getBoiled(): boolean {
    return this.boiled;
  }
}

export default class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueChocolateBoilerInstance: ChocolateBoiler;

  private constructor() {
    this.boiled = false;
    this.empty = true;
  }

  public static getInstance(): ChocolateBoiler {
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

  public drain(): void {
    if (!this.getEmpty() && this.getBoiled()) {
      this.empty = true;
    }
  }

  public boil(): void {
    if (!!this.getEmpty() && !this.getBoiled()) {
      this.boiled = true;
    }
  }

  private getEmpty(): boolean {
    return this.empty;
  }

  private getBoiled(): boolean {
    return this.boiled;
  }
}

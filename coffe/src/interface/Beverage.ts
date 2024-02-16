import { TSize } from "../constants";

export default abstract class Beverage {
  protected description: string = "Unknown Beverage";
  protected size: TSize = "TALL";

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;

  public getSize(): TSize {
    return this.size;
  }

  public setSize(s: TSize): void {
    this.size = s;
  }
}

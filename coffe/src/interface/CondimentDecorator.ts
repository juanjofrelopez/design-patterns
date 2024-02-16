import { ESize, TSize } from "../constants";
import Beverage from "./Beverage";

export default abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  public abstract getDescription(): string;

  public getSize(): TSize {
    return this.beverage.getSize();
  }
}

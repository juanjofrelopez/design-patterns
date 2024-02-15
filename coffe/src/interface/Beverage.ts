export default abstract class Beverage {
  protected description: string;

  constructor() {}

  abstract getDescription(): string;
  abstract cost(): number;
}

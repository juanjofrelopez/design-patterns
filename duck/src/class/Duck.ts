import FlyBehavior from "../interface/Fly/FlyBehavior";
import QuackBehavior from "../interface/Quack/QuackBehavior";

export default abstract class Duck {
  protected flyBehavior: FlyBehavior;
  protected quackBehavior: QuackBehavior;

  constructor() {}

  abstract display(): void;

  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  swim(): void {
    console.log("All ducks float, even decoys!");
  }
}

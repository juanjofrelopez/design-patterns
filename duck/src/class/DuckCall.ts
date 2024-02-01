import Quack from "../interface/Quack/Quack";
import QuackBehavior from "../interface/Quack/QuackBehavior";

export default class DuckCall {
  protected quackBehavior: QuackBehavior;
  constructor() {
    this.quackBehavior = new Quack();
  }

  performQuack() {
    this.quackBehavior.quack();
  }
}

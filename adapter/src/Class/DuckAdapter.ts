import Duck from "../Interface/Duck";
import Turkey from "../Interface/Turkey";

export default class DuckAdapter implements Turkey {
  private duck: Duck;
  constructor(d: Duck) {
    this.duck = d;
  }
  gobble(): void {
    this.duck.quack();
  }
  fly(): void {
    console.log("randomly fly one out of 5 times");
  }
}

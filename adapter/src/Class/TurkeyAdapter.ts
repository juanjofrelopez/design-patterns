import Duck from "../Interface/Duck";
import Turkey from "../Interface/Turkey";

export default class TurkeyAdapter implements Duck {
  private turkey: Turkey;
  constructor(t: Turkey) {
    this.turkey = t;
  }
  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
  quack(): void {
    this.turkey.gobble();
  }
}

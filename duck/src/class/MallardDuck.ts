import FlyWithWings from "../interface/Fly/FlyWithWings";
import Quack from "../interface/Quack/Quack";
import Duck from "./Duck";

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }
  display(): void {
    console.log("Mallard duck!");
  }
}

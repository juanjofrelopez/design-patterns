import FlyNoWay from "../interface/Fly/FlyNoWay";
import Quack from "../interface/Quack/Quack";
import Duck from "./Duck";

export default class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display(): void {
    console.log("Model duck!");
  }
}

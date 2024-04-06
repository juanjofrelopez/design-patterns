import Duck from "../Interface/Duck";

export default class MallardDuck implements Duck {
  fly(): void {
    console.log("mallard duck flying");
  }
  quack(): void {
    console.log("mallard duck quacking");
  }
}

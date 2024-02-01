import QuackBehavior from "./QuackBehavior";

export default class Quack implements QuackBehavior {
  quack() {
    console.log("Quack!");
  }
}

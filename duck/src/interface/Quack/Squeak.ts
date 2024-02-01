import QuackBehavior from "./QuackBehavior";

export default class Squeak implements QuackBehavior {
  quack() {
    console.log("Squeak");
  }
}

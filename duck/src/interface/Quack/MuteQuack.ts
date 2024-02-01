import QuackBehavior from "./QuackBehavior";

export default class MuteQuack implements QuackBehavior {
  quack() {
    console.log("<silence>");
  }
}

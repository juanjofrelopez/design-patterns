import FlyBehavior from "./FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}

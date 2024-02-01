import FlyBehavior from "./FlyBehavior";

export default class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("Rocket powered flying!");
  }
}

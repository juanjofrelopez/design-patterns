import Screen from "./Screen";

export default class Amplifier {
  private screen: Screen;
  public name: string;
  constructor(n: string, s: Screen) {
    this.name = n;
    this.screen = s;
  }

  turnOn() {
    console.log("Turning amplifier on!");
  }

  connect() {
    console.log(
      `Connecting ${this.name} amplifier to ${this.screen.name} screen`
    );
  }
}

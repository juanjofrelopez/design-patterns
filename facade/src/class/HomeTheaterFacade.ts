import Amplifier from "./Amplifier";
import Screen from "./Screen";

export default class HomeTheaterFacade {
  private screen: Screen;
  private amplifier: Amplifier;

  constructor(s: Screen, a: Amplifier) {
    this.screen = s;
    this.amplifier = a;
  }

  watchMovie() {
    // complex process
    this.amplifier.connect();
    this.amplifier.turnOn();
    this.screen.turnOn();
  }
}

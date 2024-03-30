import Light from "./Light";

export default class GarageDoor {
  private light: Light;
  public state: boolean;

  constructor(l: Light) {
    this.light = l;
    this.state = false; //closed
  }

  public up() {
    console.log("Garage door is open");
  }

  public down() {
    console.log("Garage door is closed");
  }

  public stop() {}

  public lightOn() {
    this.light.on();
  }

  public lightOff() {
    this.light.off();
  }
}

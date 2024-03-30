import Command from "../../interface/Command";
import Light from "../Receivers/Light";

export default class LightOffCommand implements Command {
  private light: Light;
  constructor(l: Light) {
    this.light = l;
  }
  execute(): void {
    this.light.off();
  }
}

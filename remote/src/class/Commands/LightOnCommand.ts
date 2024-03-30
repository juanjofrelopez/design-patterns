import Command from "../../interface/Command";
import Light from "../Receivers/Light";

export default class LightOnCommand implements Command {
  private light: Light;

  constructor(l: Light) {
    this.light = l;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}

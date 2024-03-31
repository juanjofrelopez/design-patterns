import Command from "../../interface/Command";
import GarageDoor from "../Receivers/GarageDoor";

export default class GarageDoorCloseCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(g: GarageDoor) {
    this.garageDoor = g;
  }

  execute(): void {
    this.garageDoor.lightOn();
    this.garageDoor.down();
    this.garageDoor.lightOff();
  }

  undo(): void {
    this.garageDoor.lightOn();
    this.garageDoor.up();
    this.garageDoor.lightOff();
  }
}

import Command from "../../interface/Command";
import GarageDoor from "../Receivers/GarageDoor";

export default class GarageDoorOpenCommmand implements Command {
  private garageDoor: GarageDoor;
  constructor(g: GarageDoor) {
    this.garageDoor = g;
  }
  execute(): void {
    this.garageDoor.lightOn();
    this.garageDoor.up();
    this.garageDoor.lightOff();
  }
}

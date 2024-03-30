import Command from "../../interface/Command";
import CeilingFan from "../Receivers/CeilingFan";

export default class CeilingFanHighCommand implements Command {
  private ceilingFan: CeilingFan;
  private prevSpeed: number;
  constructor(c: CeilingFan) {
    this.ceilingFan = c;
  }
  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.high();
  }
  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.OFF:
        this.ceilingFan.off();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
    }
  }
}

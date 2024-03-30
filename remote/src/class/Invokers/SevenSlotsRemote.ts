import Command from "../../interface/Command";
import NoCommand from "../Commands/NoCommand";

export default class SevenSlotsRemote {
  private onCommands: Command[];
  private offCommands: Command[];

  constructor() {
    this.onCommands = new Array<Command>(7);
    this.offCommands = new Array<Command>(7);
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonClick(slot: number) {
    this.onCommands[slot].execute();
  }

  public offButtonClick(slot: number) {
    this.offCommands[slot].execute();
  }

  public toString() {
    console.log("###### Seven slot remote controller front panel ######");
    for (let i = 0; i < 7; i++) {
      console.log(
        "slot #",
        i + 1,
        this.onCommands[i].constructor,
        this.offCommands[i].constructor
      );
    }
  }
}

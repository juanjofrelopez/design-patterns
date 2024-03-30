import Command from "../../interface/Command";
import NoCommand from "../Commands/NoCommand";

export default class SevenSlotsRemote {
  private onCommands: Command[];
  private offCommands: Command[];
  private undoCommand: Command;

  constructor() {
    this.onCommands = new Array<Command>(7);
    this.offCommands = new Array<Command>(7);
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonClick(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonClick(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonClick() {
    this.undoCommand.undo();
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
    console.log("undo cmd: ", this.undoCommand.constructor);
  }
}

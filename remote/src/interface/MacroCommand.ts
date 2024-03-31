import Command from "./Command";

export default class MacroCommand implements Command {
  private commands: Command[];
  constructor(c: Command[]) {
    this.commands = c;
  }
  execute(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].execute();
    }
  }
  undo(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].undo();
    }
  }
}

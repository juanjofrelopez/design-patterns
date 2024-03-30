import Command from "../../interface/Command";

export default class NoCommand implements Command {
  execute(): void {
    console.log("did nothing :(");
  }
}

import Command from "../../interface/Command";

export default class SimpleRemoteController {
  private slot: Command;
  public setCommand(c: Command) {
    this.slot = c;
  }
  public buttonWasPressed() {
    this.slot.execute();
  }
}

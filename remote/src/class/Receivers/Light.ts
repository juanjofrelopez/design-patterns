export default class Light {
  public state: boolean;
  private room: string;
  constructor(r: string) {
    this.state = false;
    this.room = r;
  }
  on() {
    console.log(this.room, " light is on!");
    this.state = true;
  }
  off() {
    console.log(this.room, " light is off!");
    this.state = false;
  }
}

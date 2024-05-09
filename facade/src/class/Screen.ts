export default class Screen {
  public name: string;

  constructor(n: string) {
    this.name = n;
  }

  turnOn() {
    console.log(`Turning ${this.name} screen on!`);
  }
}

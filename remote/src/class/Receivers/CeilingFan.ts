export default class CeilingFan {
  static readonly HIGH = 3;
  static readonly MEDIUM = 2;
  static readonly LOW = 1;
  static readonly OFF = 0;
  private location: string;
  private speed: number;

  constructor(l: string) {
    this.speed = CeilingFan.OFF;
    this.location = l;
  }

  public high(): void {
    console.log("turning", this.location, "ceiling fan HIGH");
    this.speed = CeilingFan.HIGH;
  }
  public medium() {
    console.log("turning", this.location, "ceiling fan MEDIUM");
    this.speed = CeilingFan.MEDIUM;
  }
  public low() {
    console.log("turning", this.location, "ceiling fan LOW");
    this.speed = CeilingFan.LOW;
  }
  public off() {
    console.log("turning", this.location, "ceiling fan OFF");
    this.speed = CeilingFan.OFF;
  }
  public getSpeed(): number {
    return this.speed;
  }
  public getLocation(): string {
    return this.location;
  }
}

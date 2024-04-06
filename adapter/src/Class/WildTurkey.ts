import Turkey from "../Interface/Turkey";

export default class WildTurkey implements Turkey {
  gobble(): void {
    console.log("wild turkey gobbling");
  }
  fly(): void {
    console.log("wild turkey short flying");
  }
}

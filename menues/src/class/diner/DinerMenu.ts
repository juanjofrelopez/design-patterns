import Iterator from "../../interface/Iterator";
import MenuItem from "../../interface/MenuItem";
import DinerMenuIterator from "./DinerMenuIIterator";

export default class DinerMenu {
  public menuItems: MenuItem[];
  constructor() {
    this.menuItems = [];
    this.menuItems.push(new MenuItem("veggy BLT", "piolaaa", false, 123));
  }

  public addItem(m: MenuItem): void {
    this.menuItems.push(m);
  }

  public createIterator(): Iterator {
    return new DinerMenuIterator(this.menuItems);
  }
}

import Iterator from "../../interface/Iterator";
import Menu from "../../interface/Menu";
import MenuItem from "../../interface/MenuItem";
import DinerMenuIterator from "./DinerMenuIIterator";

export default class DinerMenu implements Menu {
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

import Iterator from "../../interface/Iterator";
import MenuItem from "../../interface/MenuItem";

export default class DinerMenuIterator implements Iterator {
  public items: MenuItem[];
  private i: number;

  constructor(items: MenuItem[]) {
    this.items = items;
    this.i = 0;
  }

  hasNext(): boolean {
    if (this.i < this.items.length) return true;
    this.i = 0;
    return false;
  }

  next(): MenuItem {
    const itemToReturn: MenuItem = this.items[this.i];
    this.i++;
    return itemToReturn;
  }
}

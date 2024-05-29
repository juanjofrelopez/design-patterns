import Iterator from "../../interface/Iterator";
import MenuItem from "../../interface/MenuItem";

export default class PancakeHouseMenuIterator implements Iterator {
  private items: Map<string, MenuItem>;
  private it: IterableIterator<[string, MenuItem]>;

  constructor(m: Map<string, MenuItem>) {
    this.items = m;
    this.it = this.items.entries();
  }

  hasNext(): boolean {
    return this.it.next().done !== true;
  }

  next(): MenuItem {
    return this.it.next().value;
  }
}

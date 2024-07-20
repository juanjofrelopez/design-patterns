import Menu from "../../interface/Menu";
import MenuItem from "../../interface/MenuItem";
import PancakeHouseMenuIterator from "./PancakeHouseMenuIterator";

export default class PancakeHouseMenu implements Menu {
  public menuItems: Map<string, MenuItem>; // name -> menu item

  constructor() {
    this.menuItems = new Map();
    this.menuItems.set("bbq", new MenuItem("not bbq", "exquere", true, 563));
  }

  public addItem(m: MenuItem) {
    this.menuItems.set(m.name, m);
  }

  public createIterator() {
    return new PancakeHouseMenuIterator(this.menuItems);
  }
}

import { repeatStringNumTimes } from "../utils";
import MenuComponent from "../interface/MenuComponent";

export default class Menu extends MenuComponent {
  private menuComponents: MenuComponent[];
  private name: string;
  private description: string;

  constructor(n: string, d: string) {
    super();
    this.menuComponents = [];
    this.name = n;
    this.description = d;
  }
  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  print(tabs: number): void {
    const tab = repeatStringNumTimes("\t", tabs);
    console.log("", tab, "*********************************************");
    console.log("", tab, "menu name:", this.name);
    console.log("", tab, "description:", this.description);
    this.menuComponents.forEach((mc) => {
      mc.print(tabs + 2);
    });
  }
}

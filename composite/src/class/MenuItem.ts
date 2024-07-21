import { repeatStringNumTimes } from "../utils";
import MenuComponent from "../interface/MenuComponent";

export default class MenuItem extends MenuComponent {
  private name: string;
  private description: string;
  private vegetarian: boolean;
  private price: number;

  constructor(n: string, d: string, v: boolean, p: number) {
    super();
    this.name = n;
    this.description = d;
    this.vegetarian = v;
    this.price = p;
  }

  getName(): string {
    return this.name;
  }
  getDescription(): string {
    return this.description;
  }
  getPrice(): number {
    return this.price;
  }
  isVegetarian(): boolean {
    return this.vegetarian;
  }
  print(tabs: number): void {
    const tab = repeatStringNumTimes("\t", tabs);
    console.log(tab, "*********************************************");
    console.log(tab, this.name);
    console.log(tab, "is vegetarian?: ", this.isVegetarian());
    console.log(tab, "price: ", this.price);
    console.log(tab, this.description);
  }
}

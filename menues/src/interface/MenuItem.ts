export default class MenuItem {
  public name: string;
  public description: string;
  vegetarian: boolean;
  price: number;

  constructor(n: string, d: string, v: boolean, p: number) {
    this.name = n;
    this.description = d;
    this.vegetarian = v;
    this.price = p;
  }

  public plot(): void {
    console.log(this.name, this.description, this.price);
  }
}

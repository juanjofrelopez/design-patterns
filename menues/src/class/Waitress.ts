import Menu from "../interface/Menu";

export default class Waitress {
  private menues: Menu[];
  constructor(m: Menu[]) {
    this.menues = m;
  }

  printMenu(): void {
    this.menues.forEach((m) => {
      const it = m.createIterator();
      while (it.hasNext()) {
        const menuItem = it.next();
        menuItem.plot();
      }
    });
  }
}

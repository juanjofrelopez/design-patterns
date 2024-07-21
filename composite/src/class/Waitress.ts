import MenuComponent from "../interface/MenuComponent";

export default class Waitress {
  private allMenues: MenuComponent;
  constructor(am: MenuComponent) {
    this.allMenues = am;
  }
  printMenu() {
    this.allMenues.print(0);
  }
}

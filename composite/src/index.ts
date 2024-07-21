import Menu from "./class/Menu";
import MenuItem from "./class/MenuItem";
import Waitress from "./class/Waitress";

console.log("--------------PROGRAM STARTS HERE-----------");
const simpleMenuItem = new MenuItem("a", "desc", true, 123.56);

const pancakeHouseMenu = new Menu("pancake house", "desc");
pancakeHouseMenu.add(simpleMenuItem);
const dinerMenu = new Menu("diner menu", "desc");
dinerMenu.add(simpleMenuItem);

const allMenues = new Menu("all menues", "desc");
allMenues.add(pancakeHouseMenu);
allMenues.add(dinerMenu);

const waitress = new Waitress(allMenues);
waitress.printMenu();
console.log("-------------PROGRAM ENDS HERE-----------");

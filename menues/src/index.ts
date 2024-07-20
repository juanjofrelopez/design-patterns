import Waitress from "./class/Waitress";
import DinerMenu from "./class/diner/DinerMenu";
import PancakeHouseMenu from "./class/pancake/PancakeHouseMenu";

console.log("--------------PROGRAM STARTS HERE-----------");

const dm = new DinerMenu();
const pm = new PancakeHouseMenu();
const waitress = new Waitress([dm, pm]);
waitress.printMenu();

console.log("-------------PROGRAM ENDS HERE-----------");

import DarkRoast from "./src/class/Beverages/DarkRoast";
import Milk from "./src/class/Condiments/Milk";
import Mocha from "./src/class/Condiments/Mocha";
import Whip from "./src/class/Condiments/Whip";
import { ESize } from "./src/constants";
import Beverage from "./src/interface/Beverage";

console.log("--------------PROGRAM STARTS HERE-----------");
let beverage: Beverage = new DarkRoast("VENTI");
console.log(beverage.getDescription(), "\n$", beverage.cost());

beverage = new Milk(beverage);
beverage = new Mocha(beverage);
beverage = new Whip(beverage);

console.log(beverage.getDescription(), "\n$", beverage.cost().toFixed(2));

console.log("-------------PROGRAM ENDS HERE-----------");

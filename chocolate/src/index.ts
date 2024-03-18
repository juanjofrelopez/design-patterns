import ChocolateBoiler from "./class/ChocolateBoiler";
import EnumChocolateBoiler from "./class/EnumChocolateBoiler";

console.log("--------------PROGRAM STARTS HERE-----------");
// const chocolateBoiler = ChocolateBoiler.getInstance();

const chocolateBoiler = EnumChocolateBoiler.UNIQUE_INSTANCE;
console.log(EnumChocolateBoiler.getString());

console.log("-------------PROGRAM ENDS HERE-----------");

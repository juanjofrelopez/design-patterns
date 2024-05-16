import Coffe from "./class/Coffe";
import Tea from "./class/Tea";

console.log("--------------PROGRAM STARTS HERE-----------");
const coffe = new Coffe();
coffe.prepareRecipe(["milk", "chocolate"]);

console.log("------------------------------------------------------------");

const tea = new Tea();
tea.prepareRecipe(["lemon"]);
console.log("-------------PROGRAM ENDS HERE-----------");

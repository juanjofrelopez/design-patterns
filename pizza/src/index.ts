import NYStylePizzaStore from "./class/stores/NYStylePizzaStore";
import PizzaStore from "./interface/PizzaStore";

console.log("--------------PROGRAM STARTS HERE-----------");
const nyStylePizzaStore : PizzaStore = new NYStylePizzaStore()
nyStylePizzaStore.orderPizza("cheese",[])
console.log("-------------PROGRAM ENDS HERE-----------");

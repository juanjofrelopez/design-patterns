import DuckAdapter from "./Class/DuckAdapter";
import MallardDuck from "./Class/MallardDuck";
import TurkeyAdapter from "./Class/TurkeyAdapter";
import WildTurkey from "./Class/WildTurkey";

console.log("--------------PROGRAM STARTS HERE-----------");

const mallardDuck = new MallardDuck();
const wildTurkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(wildTurkey);
const duckAdapter = new DuckAdapter(mallardDuck);

mallardDuck.fly();
mallardDuck.quack();
turkeyAdapter.fly();
turkeyAdapter.quack();
duckAdapter.fly();
duckAdapter.gobble();

console.log("-------------PROGRAM ENDS HERE-----------");

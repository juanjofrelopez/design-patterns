import MallardDuck from "./src/class/MallardDuck";
import ModelDuck from "./src/class/ModelDuck";
import FlyRocketPowered from "./src/interface/Fly/FlyRocketPowered";

console.log("--------------PROGRAM STARTS HERE-----------");

const mallard = new MallardDuck();
mallard.display();
mallard.performFly();
mallard.performQuack();

// starts with no fly and then learns rocket fly
const model = new ModelDuck();
model.display();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();

console.log("-------------PROGRAM ENDS HERE-----------");

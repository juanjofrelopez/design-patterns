import DinerMenu from "./class/diner/DinerMenu";
import PancakeHouseMenu from "./class/pancake/PancakeHouseMenu";

console.log("--------------PROGRAM STARTS HERE-----------");

const dm = new DinerMenu();
const it = dm.createIterator();
while (it.hasNext()) {
  const mi = it.next();
  mi.plot();
}

const pm = new PancakeHouseMenu();
const pit = pm.createIterator();
while (pit.hasNext()) {
  const mi = pit.next();
  console.log(mi);
}

console.log("-------------PROGRAM ENDS HERE-----------");

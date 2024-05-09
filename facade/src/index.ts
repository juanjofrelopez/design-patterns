import Amplifier from "./class/Amplifier";
import HomeTheaterFacade from "./class/HomeTheaterFacade";
import Screen from "./class/Screen";

console.log("--------------PROGRAM STARTS HERE-----------");

const livingTv = new Screen("living");
const livingAmplifier = new Amplifier("living", livingTv);
const livingHomeTheater = new HomeTheaterFacade(livingTv, livingAmplifier);
livingHomeTheater.watchMovie();

console.log("-------------PROGRAM ENDS HERE-----------");

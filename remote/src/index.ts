import GarageDoorOpenCommmand from "./class/Commands/GarageDoorOpenCommand";
import LightOffCommand from "./class/Commands/LightOffCommand";
import LightOnCommand from "./class/Commands/LightOnCommand";
import SevenSlotsRemote from "./class/Invokers/SevenSlotsRemote";
import SimpleRemoteController from "./class/Invokers/SimpleRemoteController";
import GarageDoor from "./class/Receivers/GarageDoor";
import Light from "./class/Receivers/Light";

console.log("--------------PROGRAM STARTS HERE-----------");
const remote = new SimpleRemoteController(); // invoker

const livinRoomLight = new Light("living room"); // receiver
const livingLightOnCommand = new LightOnCommand(livinRoomLight); // command
const livingLightOffCommand = new LightOffCommand(livinRoomLight); //command

const garageLight = new Light("garage");
const garageDoor = new GarageDoor(garageLight);
const openGarageDoorCommand = new GarageDoorOpenCommmand(garageDoor);

remote.setCommand(livingLightOnCommand);
remote.buttonWasPressed();
remote.setCommand(openGarageDoorCommand);
remote.buttonWasPressed();

const sevenSlotRemote = new SevenSlotsRemote();
sevenSlotRemote.setCommand(1, livingLightOnCommand, livingLightOffCommand);
sevenSlotRemote.toString();

console.log("-------------PROGRAM ENDS HERE-----------");

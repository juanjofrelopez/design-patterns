import CeilingFanHighCommand from "./class/Commands/CeilingFanHighCommand";
import CeilingFanMediumCommand from "./class/Commands/CeilingFanMediumCommand";
import CeilingFanOffCommand from "./class/Commands/CeilingFanOffCommand";
import GarageDoorOpenCommmand from "./class/Commands/GarageDoorOpenCommand";
import LightOffCommand from "./class/Commands/LightOffCommand";
import LightOnCommand from "./class/Commands/LightOnCommand";
import SevenSlotsRemote from "./class/Invokers/SevenSlotsRemote";
import SimpleRemoteController from "./class/Invokers/SimpleRemoteController";
import CeilingFan from "./class/Receivers/CeilingFan";
import GarageDoor from "./class/Receivers/GarageDoor";
import Light from "./class/Receivers/Light";
import MacroCommand from "./interface/MacroCommand";

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
const livingRoomCeilingFan = new CeilingFan("Living room");
const livingRoomCeilingFanHighCommand = new CeilingFanHighCommand(
  livingRoomCeilingFan
);
const livingRoomCeilingFanMediumCommand = new CeilingFanMediumCommand(
  livingRoomCeilingFan
);
const livingRoomCeilingFanOffCommand = new CeilingFanOffCommand(
  livingRoomCeilingFan
);
sevenSlotRemote.setCommand(0, livingLightOnCommand, livingLightOffCommand);
sevenSlotRemote.setCommand(
  1,
  livingRoomCeilingFanHighCommand,
  livingRoomCeilingFanOffCommand
);
sevenSlotRemote.setCommand(
  2,
  livingRoomCeilingFanMediumCommand,
  livingRoomCeilingFanOffCommand
);
sevenSlotRemote.toString();

sevenSlotRemote.onButtonClick(0);
sevenSlotRemote.offButtonClick(0);
sevenSlotRemote.undoButtonClick();

sevenSlotRemote.onButtonClick(1); // ceiling HIGH
sevenSlotRemote.offButtonClick(1); // ciling OFF
sevenSlotRemote.undoButtonClick(); // ceiling HIGH

sevenSlotRemote.onButtonClick(2); // ceiling MEDIUM
sevenSlotRemote.undoButtonClick(); // celing HIGH

const partyOnCommands = [
  livingLightOnCommand,
  openGarageDoorCommand,
  livingRoomCeilingFanHighCommand,
];
const partyOffCommands = [
  livingLightOffCommand,
  livingRoomCeilingFanOffCommand,
];
const partyOnMacro = new MacroCommand(partyOnCommands);
const partyOffMacro = new MacroCommand(partyOffCommands);
sevenSlotRemote.setCommand(5, partyOnMacro, partyOffMacro);
sevenSlotRemote.toString();
sevenSlotRemote.onButtonClick(5);
sevenSlotRemote.offButtonClick(5);
console.log("-------------PROGRAM ENDS HERE-----------");

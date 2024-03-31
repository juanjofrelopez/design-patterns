import CeilingFanHighCommand from "./class/Commands/CeilingFanHighCommand";
import CeilingFanMediumCommand from "./class/Commands/CeilingFanMediumCommand";
import CeilingFanOffCommand from "./class/Commands/CeilingFanOffCommand";
import GarageDoorCloseCommand from "./class/Commands/GarageDoorCloseCommand";
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
const closeGarageDoorCommand = new GarageDoorCloseCommand(garageDoor);

remote.setCommand(livingLightOnCommand);
remote.buttonWasPressed();
remote.setCommand(openGarageDoorCommand);
remote.buttonWasPressed();
remote.setCommand(closeGarageDoorCommand);
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

console.log("--------------SLOT 0 living light ON OFF UNDO-----------------");
sevenSlotRemote.onButtonClick(0);
sevenSlotRemote.offButtonClick(0);
sevenSlotRemote.undoButtonClick();

console.log("--------------SLOT 1 CEILING HIGH ON OFF UNDO-----------------");
sevenSlotRemote.onButtonClick(1); // ceiling HIGH
sevenSlotRemote.offButtonClick(1); // ciling OFF
sevenSlotRemote.undoButtonClick(); // ceiling HIGH

console.log("--------------SLOT 2 FAN MEDIUM ON OFF UNDO-----------------");
sevenSlotRemote.onButtonClick(2); // ceiling MEDIUM
sevenSlotRemote.offButtonClick(2); // ceiling
sevenSlotRemote.undoButtonClick(); // celing HIGH

const partyOnCommands = [
  livingLightOnCommand,
  openGarageDoorCommand,
  livingRoomCeilingFanHighCommand,
];
const partyOffCommands = [
  livingLightOffCommand,
  closeGarageDoorCommand,
  livingRoomCeilingFanOffCommand,
];
const partyOnMacro = new MacroCommand(partyOnCommands);
const partyOffMacro = new MacroCommand(partyOffCommands);
sevenSlotRemote.setCommand(5, partyOnMacro, partyOffMacro);
sevenSlotRemote.toString();
console.log("---------------ON MACRO---------------------------------");
sevenSlotRemote.onButtonClick(5);
console.log("----------------------OFF MACRO--------------------------");
sevenSlotRemote.offButtonClick(5);
console.log("------------------------UNDO MACRO------------------------");
sevenSlotRemote.undoButtonClick();
console.log("-------------PROGRAM ENDS HERE-----------");

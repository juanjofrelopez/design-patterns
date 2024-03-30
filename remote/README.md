# Command Pattern

## Definition

```
The command pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations
```

We are going to encapsulate method invocation, to decouple the object invoking from the implementation.

This pattern is really used when it comes to "redo/undo" functionality.

## How it works pt.1

There are 4 classes: Client, Command, Invoker, Receiver

- The client creates the Command object `createCommandObject()`.
- The Command object consists of a series of actions to execute on a Receiver. All of them described in a `execute()` method.
- The client call `setCommand()` on the Invoker object and passes the Command object where it gets stored until it's needed.
- When Client whants to execute the commands, the Invoker calls the `execute()` method in the Command class.
- This results in a series of Receiver's actions being executed.
- The Receiver generally are the vendor classes provided to us that efectivelly implement the actions.

## Parameterizing an object (parametrizar un objeto)

What this means is:

- First load the invoker with a command
- execute it
- load another command
- and so on...

This design is decoupled because the invoker doesn't care WHAT command object it had, as long as it implemented the command interface.

## Meta Command Pattern

```
Allows us to create 'macros' of commands so that you can execute multiple commands at once
```

## Remote controller with 7 slots

We just simply have state that represents the 7 `onButton` commands and 7 `offButton` commands in the remote class.

## Null objects

```
A null object is useful when you don't have a meaningful object to return , and yet you want to remove the responsibility for handling null from the client. Sometimes null object is even listed as a design pattern.
```

## Using functional programming to set commands

To avoid creating concrete classes for every command there is, we can pass a callback function to the the parameter of the `setCommand()` method of the remote control class.

`sevenSlotRemote.setCommand(
  1,
  () => {
    livinRoomLight.on();
  },
  () => {
    livinRoomLight.off();
  }
);`

Then we have to modify the invoker class to have arrays of functions for each slot and each button.

## Undo functionality

- first we add the undo method to the command interface.
- for each command there has to be an opposite method that cancels the intended effect of the command. Super simple example: light on -> undo is to turn the lights off.
- add the functionality to track the last button pressed in the remote controller. also add the undo button press.
- each time a user presses a button, we record the command that was executed in the undo state.
- then, when the undo button is pressed, the `undo()` method of the command is executed.

## Macro Commands

A macro command can execute other commands in order one at a time. Is a class that receives an array of commands to be executed sequentially.

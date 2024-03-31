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
To undo, all the commands that were invoked in the macro must undo their previous actions.
By putting all comands in an array, you can decide dinamically which commands you want to go into that macro. This is more elegant and requires less new code.

## Dumb vs Smart commands

dumb commands just invoke an execute function on a receiver.
You could also implement all the logic inside the command to make it smarter. The disadvantage is that you loose decoupling between invoker and receiver and also loose the ability to parameterize your commands with receivers

## Longer undo history

You can keep track of more than one command by using a stack and popping the last one.

## More uses of the command pattern: QUEUING commands

Commands give us a way to package computation. This computation may be invoked long after the client created the command. Also it could be even run in another thread. This scenario can be applied to many other application such as:

- schedulers
- thread pools
- job queues
- etc

If we take for example a job queue, the command enter on one side of the queue and a job scheduler takes them on the other, executes them and then take another.
It just calls the `execute()` method as long as its of type command.
The job queue classes are totally decoupled from the objects that are doing the computation.

## More uses of the command pattern: Loging requests

As we execute commands, we store a history of them and when a crash occurs, we reload the command objects and invoke their `execute()` method.
This is particularlly useful in databases that invoke computation on large datastructures. Also in transactional systems where a transaction was done or not at all.

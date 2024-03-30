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

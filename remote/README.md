# Command Pattern
## Definition

We are going to encapsulate method invocation, to decouple the object invoking from the implementation.

This pattern is really used when it comes to "redo/undo" functionality.

## How it work pt.1
There are 4 classes: Client, Command, Invoker, Receiver
- The client creates the Command object `createCommandObject()`.
- The Command object consists of a series of actions to execute on a Receiver. All of them described in a `execute()` method.
- The client call `setCommand()` on the Invoker object and passes the Command object where it gets stored until it's needed.
- When Client whants to execute the commands, the Invoker calls the `execute()` method in the Command class.
- This results in a series of Receiver's actions being executed.
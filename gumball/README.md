# State Pattern

```
The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change in class.
```

- Its ideal for systems that can be represented as a state machine
- There's a generic interface for a `State`
- The methods of this interface are the actions that made possible to tranfer from one state to the other.
- Each state has its own class that implements the `State` interface.
- Also, each state receives in its constructor the machine that is part of. This is super important to the process of transitioning states.

## Machine Class

- Another class has to be made for the proper "machine" that stores the current state and has the handlers for traversing through states.
- This machine will have all the `States` as a state variable.
- The machine will have as methods all the 'actions' that this machine can execute. For example in the case of a vending machine this will be: insert quarter, eject quarter, turn crank, etc.
- The machine will also have a setter for the global state, and getters for all the 'states'.

## Transitioning states

Each `State` class is in charge of changing the state of the machine stored as a state variable.

First we will get the desired state from the machine and then we will set is as the current state in the machine.

## 'The object will appear to change its class...'

By using composition (holding different states as state variables) we can give the appearance of a class change by simply referencing different state objects.

## Difference with Strategy Pattern

State pattern:

- a set of behaviors encapsulated in state objects
- the client is agnostic about the state objects
- its an alternative to writing lots of conditionals

Strategy pattern:

- the client specifies the strategy object that the context is composed with.
- although the patter is flexible, theres a strategy object that is most appropiate for a context object.
- is a flexible alternative to subclassing with inheritance.

## misc
- Code the state transitions in the `Context` when there is no need for much flexibility in the design. Otherwise, put them in the state classes. This has the downside of creating dependencies between the `State` classes.
- State classes can be shared across multiple instances of contexts. You do this by assigning each state to a static instance variable.
- Consider an `abstract` class for the `State` generic class if you want to share some bahavior across states.

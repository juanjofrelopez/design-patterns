## Decorator Pattern

```
It dinamically attaches responsabilities to an object. They serve great at EXTENDING functionality as an alternative to subclassing.
```

- Decorators have the same supertype as the object they decorate.
- Objects can be decorated at runtime.
- The decorator adds its own behaviour BEFORE AND/OR AFTER delegating to the object it decorates to do the rest of the job. (for example add the cost of the condiment before or after the calculation of the superclass cost).

## Abstract class vs Interface

An **interface** is a contract that defines the properties and what the object that implements it can do. An interface doesn't exist at all at runtime, so it is not possible to make an introspection.

A **class** is both a contract and the implementation of a factory. An **abstract class** is also an implementation but incomplete. Especially, an abstract class exists at runtime, even if it has only abstract methods (then instanceof can be used).
When you define an abstract class, you often try to control how a process has to be implemented.

## Extends vs Implements

extends means:
The new class is a child. It gets benefits coming with **inheritance**. It has all the properties and methods of its parent. It can override some of these and implement new ones, but the parent stuff is already included.

implements means:
The new class can be treated as the same "shape", but it is not a child. It would be more for **polymorphism**. Polymorphism is the provision of a single interface to entities of different types.

Even though we said we are gonna use composition over inheritance, in this project we use inheritance to achieve the **type matching** and not to get the behavior. It's vital that the **decorators have the same type** as the objects they are going to decorate. This is done by composing a decorator with a component (a decorator HAS A wrapped object).

So if we need to inheritthe type, why are we using an abstract class and not an interface?

1. Because it was legacy code and we try to not change existing code.
2. An interface or an abstract class will work just fine.

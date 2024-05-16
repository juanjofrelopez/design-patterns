# Template Method Pattern

```
The Template Method pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
```

## The basics

There is an abstract superclass that defines the template method.

- The Template Method is a method of a class.
- It serves as a template for an algorithm or process, in this case, the process of making caffeinated beverages.
- Each step of the algo is represented by another method call
- Some methods may be handled by the superclass where the template method lives.
- Other methods may be handled by the subclasses that implement the superclass.
- The methods that need to be specified by the subclasses are declared `abstract`.

## Advantages

- Maximizes reuse.
- Abstracts code so is not repeated.
- Relies on subclasses to provide complete implementations

## Drawbacks (at least to me)

- When you delegate abstract methods to other subclasses, you loose the sense of what is private and what not. So to me this screams insecure because anybody can call this methods and, most importantly, alter the procedural structure of the original template method.
- It just feels like inhertance with extra steps.

## Hooks



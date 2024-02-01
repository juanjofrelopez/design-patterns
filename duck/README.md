## Strategy Pattern

```
Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class (encapsulate them), and make their objects interchangeable.
Strategy lets the algorithm vary independently from clients that use it
```

There's an abstract class Duck. A series of classes implement types of duck (eg: mallard duck).
There are interfaces for behaviors, like quacking or flying (eg: wing flying). Each type of duck can have its own type of flying behavior (a default one or a dinamically setted one).

```
Ducks "extending" Duck, fly behaviors "implementing" FlyBehavior, and quack
behaviors "implementing" QuackBehavior.
```

### Composition > Inheritance

- Mallard is a duck
- Duck has a FlyBehavior
- FlyWithWings implements FlyBehavior

Instead of inheriting their behavior, the ducks get their behavior by being composed with the right behavior object. We are encapsulating a family of algorithms.
It also allow us to change behavior at runtime as long as the class implements the right interface.

### OOP Principles

- Encapsulate what varies.
- Favor composition over inheritance.
- Program to interfaces, not implementations.
- Think at the pattern level, note the object level.

#### Exercise: Duck Call

A duck call is a device that hunters use to mimic the calls (quacks) of ducks. How would you implement your own duck call that does not inherit from the Duck class?

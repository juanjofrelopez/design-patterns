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

```
A hook is a method that is declared in the abstract class, but only given an empty or default (very small) implementation.
This gives subclasses the ability to _"hook into"_ the algorithm at various points, if they wish.
A subclass is also free to ignore the hook.
```

To use the hook we override it in our subclass.
For example: Let's say that in a method of our superclass we want to ask if another method should be executed or not.
Well, for that we use another method that retrieves a boolean.
This method that return a condition, is minimally implemented.
Our subclasses can override this method to accomodate to other necesities.
In the `Beverage` example the condition could decide wether to add condiments or not. So a method called `customerWantsCondiments()` can be implemented and always return true. If some subclass wants to change this implementation, it can. Is optional.

### Hooks vs Abstract Methods

- Use abstract methods when your subclass must provide an implementation of the method or step in the algorithm.
- Use hooks when a part of the algorithm is optional. With hooks, a subclass may choose to implement that hook, but its optional.

### Other uses of hooks

A hook can also allow a subclass to react to some step in the template method that just happened or is about to happen.
For example: `justReorderedList()` can allow the subclass to perform `updateDisplay()` to update the screen presentation of a list after its been reordered.

## The Hollywood principle

```
Don't call us, we'll call you.
```

To prevent _"Dependency rot"_ we use the hollywood principle.
This happens when you have a messy dependecy tree, meaning that a high-level component depends on low level components, and this one depends on another high-level component and this one on another high-level component and so on...

For this, the rule is that only high level components decide how and when to call low level components.

For example, the `Beverage` high level component has the control over the algorithm with the recipe and only calls the subclasses (low level components) when they are needed for an implementation of a method. These subclasses are only needed to give implementation details and will only call the abstract class because they were called first.

Factory, observer and strategy are other oop patterns that make use of this principle.

| Pattern  | Use                                                                                     |
| -------- | --------------------------------------------------------------------------------------- |
| Template | Subclasses decide how to implement steps in an algorithm                                |
| Strategy | Encapsulate interchangable behaviour and use delegation to decide which behavior to use |
| Factory  | Subclasses decide which concrete classes to instantiate                                 |

## Template vs Strategy

```
In strategy, the class that you compose with implements the entire algorithm.
In template the algorithm can be incomplete and it needs another class to fill in for the missing implementation.
```

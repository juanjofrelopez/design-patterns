## Factory Pattern

Factories handle the details of object creation. With this we are abstracting the behavior that changes into it's own interface.

### Static Factories

This is used when we define the factory as a static method. The advantage is that we don't have to create an object to make use of the factory. But the downside is that we cannot subclass it to change the behavior.

### Using object composition

In the constructor method we can define more general types of object that require different methods of "fabrication".

### Simple Factory

It's technically not a Design pattern but a programming idiom.

```
The only part where there should be references to **concrete** object classes is in the factory.
```

The factory has a reference to an abstract object. Each product needs to implement this abstract object interface.

The phrase "implements an interface" can either mean abstract class or interface. It refers to a concrete class implementing a method from a _supertype_.

## Factory Method Pattern

```
The Factory Method Pattern defines an interface for creating an object, but lets subclases decide which class to instantiate. Factory Method lets a class defer instantiation to subclases.
```

Handles object creation and encapsulates it in a subclass.
For example the class "PizzaStore" defines an abstract factory method called createPizza. It receives a type of pizza in case it has to select among different variations of the object. Each subclass of store is in charge of implementing the specifics of the creation of the object.
This isolates (decouples) the client code in the superclass, from knowing what kind of concrete object is actually being created in the subclass.

### Object Dependencies (Dependency Inversion Principle)

When you directly instantiate an object you are depending on its concrete class. We should reduce dependencies as its stated in the "dependency inversion principle".

It suggest that our high-level components should not depend on the low-level components; rather, they should both depend on abstractions.
A high level component is a class with behavior defined in terms of other low level components. For example a pizza store that directly instantiates concrete pizza classes in its orderPizza method. The solution would be to create an abstract class for Pizza so both the high and low level depend on this abstraction.

#### guidelines to help us follow this principle

- No variable should hold a reference to a concrete class. Use a factory to get around this.
- No class should derive from a concrete class. You should NOT depend on concrete classes. Instead, derive from an abstraction (interface or abstract class).
- No method should override an implemented method of any of its base classes.

It's important to know that this are GUIDELINES. You have to see if your classes change (you have the factory method to encapsulate that change) or don't at all.

# Abstract factory pattern

```
Provides an interface for creating families of related or independent objects without specifying their concrete classes.
Often the methods of an abstract factory are implemented as factory methods.
```

- Abstract pizza ingredients factory
- concrete region-specific pizza ingredient factory implements abstract pizza ingredients factory
- this concrete ingredient factories uses concrete ingredient classes.
  how do we tie this to our pizza store code?

Each pizza ingredient factory will decide the style, not the pizza
Because we'd be having to implement one class per each style of pizza

An abstract factory provides an interface for a family of products.
The store defines which type of ingrediente factory will use, and so, it determines which type
of ingredients will use resulting in a specific type of pizza.

## Differences between Factory Method and Abstract Factory

FM -> inheritance -> extend a class and provide an implementation for a factory method.
AF -> object composition -> provide an abstract type for creating a family of products. subclasses of this type define how those objects are produced. to use this factory, instantiate one and pass it into some code that is written against the abstract type.

One disadvantage of the AF is that if you need to extend the set of products you have to change the interace and this implies modifying code in every subclass.

FM -> Creates one object
AF -> Creates an entire family of products
Use FM when you don't know the entire set of concrete classes you're going to need.
Use AF when you have fmailies of products, and want to make sure cllients create products that belong together.

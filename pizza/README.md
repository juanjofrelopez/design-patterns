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

The factory has a reference to an abstract object. Each product needs to implement this abstract objct interface.

The phrase "implements an interface" can either mean abstract class or interface. It refers to a concrete class implementing a method from a *supertype*.



# Facade Pattern

```
Facade provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.
```

It's goal is to simplify another interface by hiding all of its complexity. It implements a clean, well-lit facade for it.

Complex processes may involve several different classes, writing an implementation to do a certain amount of steps may be cumbersome if we want flexibility:

- what if this system changes its components? (maybe some other class is added or replaced)
- what if you want to do another related task that involves a slightly different set of steps?

If all you need is a straightforward interface of a complex subsystem, you could implement a facade.

Facades don't "encapsulate" the subsystem classes, they just provide a simplified interface to it.

The intelligence of this interface is on the what and when to call the methods of the subsystem classes.

Many facades can be made for a particular subsystem.

The facade helps us in decoupling client code from any subsystem.

## Adapter vs Facade

The adapter can changes the interface of one or **more** classes for a client thats expecting another interface.
The facade can provide a simplified interface to a single class with a very complex interface.

The difference is in the intent:

- Adapter: Alter an interface to match another one.
- Facade: Simplify an interface to a subsystem.

## How to

1. The client is given a facade
2. Instantiate a facade
3. Use the simplified methods

## Principle of least knowledge a.k.a. Law of Demeter

Take care of the number of classes that an object interacts with.

The idea is to avoid numerous and complex interactions between different classes because a change in one of them will trigger a cascade of changes in a bunch of other.

This is kind of a consequence of programming to an implementation and not an interface.

Lots of dependencies -> fragile system -> low maintainability.

### Some rules to adhere to this principle

Invoke only methods that belong to:

- The object itself
- Object passed in as a parameter to the method
- Any object the method creates or instantiates
- Any components of the object

For example:

```java
public class Car{
  Engine engine
  // other instance variables
   public Car(){}

   public void start(Key key){
    Doors doors = new Doors()
    // call a method on an obj passed as a parameter
    boolean authorized = key.turns()
    if(authorized){
      // call a method on a component of the obj (instance variables, HAS-A)
      engine.start()
      // call a local method
      updateDashboardDisplay()
      // call a method on an obj you create or instantiate
      doors.lock()
    }
   }

   public void updateDashboardDisplay(){//...}
}

```

Avoid this:

```JAVA
public float getTemp(){
  Thermometer thermometer = station.getThermometer()
  return thermometer.getTemperature()
}
```

Do not call method on objects that were returned from calling other methods

### Some drawbacks of this principle

You spend a lot of time writing "wrapper" classes to handle other classes method's.
This can result in increase complexity and development time as well as decreased runtime performance.

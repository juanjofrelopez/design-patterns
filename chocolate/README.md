# Singleton Pattern

```
Ensures a class has only one instance, and provides a global point of acces to it.
```

Used when we only need one instance of an object. For example one database, thread pools, caches, device drivers, etc.

Class -> private constructor -> only methods from the class can instatiate -> public method that call this constructor "from inside".

There a static variable inside the class that holds the instance of the class. It'll remain in memory as long as the program keeps running.

Lazy instantiation: If we never need the instance, it never gets created. Then, only a get method for the instance is needed.

```
In TypeScript the getInstance method should also be STATIC.
```

You don't instantiate a Singleton class, you ask for an instance.

## Dealing with multithreading

We need to ensure that no other thread is executing the same instruction at the time of the first instantiation. We need to force every thread to wait its turn before it can enter the method.
In JAVA we need the "synchronized" keyword in the public getInstance method.
JavaScript is single-threaded, nothing happens asynchronously - all code: event handlers, timeouts, callbacks, etc. - run in the same thread, one after another. So there is no need to handle this types of situation.

## Drawbacks of the Singleton Pattern

It violates the "loose coupling" principle. If you make a change to the singleton class, you have to modify every object that its connected to it.
It also violates the single responsabilty principle because this class is responsible for managing its one instance and also the functionality that has to take in your application.

The singleton cannot be subclassed because the constructor needs to be private. Also because of the static variable, every subclass will be using the same instance. So its really weird, and also the code for the singleton is pretty straightforward.

## Global variables vs Singleton pattern

the issues of lazy vs eager instantiation
A global variable can ensure to give global access but cannot ensure that only one instance is created.
Also global variables can encourage the dveloper to pollute the namespace with lots of global references to small objects.

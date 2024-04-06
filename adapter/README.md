# Adapter Pattern

## Definition

```
The adapter pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
```

The Adapter uses **Object composition** to be composed with an adaptee class.
The adapter **binds** the client to an interface, not an implementation. We could use several adapters each converting to a different set of classes.

## Components

### Client

- The client is implemented against the target interface.

### Adapter

- Implements the target interface of the type we're adapting to, meaning the client.
- We also need a reference of the object we are adapting, meaning the adaptee.

### Adaptee:

- Is the object we are trying to adapt.

## Flow

1. The client makes a request on the adapter by calling a method of the target interface.
2. The adapter translates the request into one or more calls of the methods using the adaptee interface.
3. The client receives the results of the call and never knows there is an adapter doing the translation. Client and adaptee are decoupled.

## When is too much adaptation?

Imagine if you need a lot of code to implement another target interface. You might as well CLEANLY implement a class that encapsulates all the changes.

## More than one adaptee

Sometimes you might want to adapt more than one target interface.

## Object adapter vs Class adapter (composition vs inheritance)

The only difference with the object adapter is that the Adapter class subclasses (extends) the adaptee and the target classes at the same time.
TS doesn't support multiple class inheritance (extends).
How does this affect flexibility?

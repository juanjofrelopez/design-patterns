# Composite Pattern

```
The composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies.
Composite lets cliente treat individual objects and compositions of objects uniformly.
```

A `composite` contains `components`.

`components` come in two different flavors:

- `composites`
- `leaf elements`

A `composite` holds a set of children; those children may be other composites or leaf elements.

A `leaf` defines the behaviour for the elements in the composition. It does this by implementing the operation the composite supports.

A `client` uses the component interface to manipulate the objects in the composition.

## How to

- define a `component` interface. We declare it abstract class to provide default implementations for these methods.
- all components must implement the `component` interface
- because leaves and nodes have different roles we can't always define a default implementation for each methods. in that case the best thing to do is to throw an exeption.
- implement the `leaf` class
- implement the `composite` class

## Trade off

By allowing the `component` class to provide functionality both for a child node and a leaf elements, we loose the adherance to the Single Responsibility Principle.

Instead we get "transparency" because a client can treat both composites and leaf the same without knowing which type is.

We also loose "safety" somehow because a client can opt to do composite operations on a leaf element.

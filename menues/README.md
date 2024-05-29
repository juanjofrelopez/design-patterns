# Iterator Pattern

```

```

## Main idea

The idea is to have a class that allows me to iterate any kind of collection of objects withouth relying in implementation details.
Collection means a group of objects that may be stored in very different data structures. They are also known as aggregates. For example an arrays, hashmaps, lists, etc.

The basic interface is composed of two methods: `hasNext()` and `next()`. The basic approach would be:

```ts
const iterator: Iterator = someObject.createIterator();
if (iterator.hasNext()) {
  const state = iterator.next();
}
```

Let's say that diner menu will have an array collection and pankacke house will have a hashmap collection. they will need different iterators.

That doesn't matter because we want to **encapsulate iteration**. The interface to iterate will be the same for everyone.

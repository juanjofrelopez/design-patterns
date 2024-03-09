## Singleton Pattern

```
Ensures a class has only one instance, and provides a global point of acces to it.
```

Used when we only need one instance of an object. For example one database, thread pools, caches, device drivers, etc.

Class -> private constructor -> only methods from the class can instatiate -> public method that call this constructor "from inside".

There a static variable inside the class that holds the instance of the class. It'll remain in memory as long as the program keeps running.

Lazy instantiation: If we never need the instance, it never gets created. Then, only a get method for the instance is needed.

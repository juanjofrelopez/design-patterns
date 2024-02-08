## Observer Pattern

```
Observer Pattern = Publishers (Subjects) + Subscribers (Observers)
It defines a one-to-many relationship between a set of objects.
When an obj changes its state, all of its dependant are notified and automatically updated.
```

```
Publish-Subscribe Pattern !== Observer Pattern
```

- Most implementations include a Subject and Observer interfaces.
- One WeatherData object -> Three Displays (and possibly more in the future)
- Allow users to add displays (we charge for them)
- The only constant in software development is change.

### Design principle: Loosely coupled objects
An object is tightly coupled with another when its too dependent on that one. This is with the porpouse of better handling change.



It makes sense to let Observers retrieve the data they need rather than passing more and more data to them through the update() method.
Updating the Weather Station code to allow Observers to pull the data they need is a pretty straightforward exercise. All we need to do is make sure the Subject has getter methods for its data, and then change our Observers to use them to pull the data that’s appropriate for their needs.

When an Observer is notified of a change, it calls getter methods on the Subject to pull the values it needs.
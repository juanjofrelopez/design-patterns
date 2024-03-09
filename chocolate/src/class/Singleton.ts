export default class Singleton {
  private static uniqueInstance: Singleton;
  private constructor() {}

  public getInstance(): Singleton {
    if (Singleton.uniqueInstance === null) {
      Singleton.uniqueInstance = new Singleton();
    }
    return Singleton.uniqueInstance;
  }
}

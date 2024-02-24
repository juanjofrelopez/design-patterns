export default abstract class Pizza {
  constructor() {}
  public abstract prepare(): void;
  public abstract bake(): void;
  public abstract cut(): void;
  public abstract box(): void;
}

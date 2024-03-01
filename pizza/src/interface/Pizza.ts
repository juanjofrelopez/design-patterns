export default abstract class Pizza {
  public name: string;
  public dough: string;
  public sauce: string;
  public toppings: string[];

  public abstract prepare(): void;
  public abstract bake(): void;
  public abstract cut(): void;
  public abstract box(): void;
}

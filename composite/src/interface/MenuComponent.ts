export default abstract class MenuComponent {
  getName(): string {
    throw new Error("unsopported operation");
  }
  getDescription(): string {
    throw new Error("unsopported operation");
  }
  getPrice(): number {
    throw new Error("unsopported operation");
  }
  isVegetarian(): boolean {
    throw new Error("unsopported operation");
  }
  print(tabs: number) {
    throw new Error("unsopported operation");
  }
  add(mc: MenuComponent) {
    throw new Error("unsopported operation");
  }
  remove(mc: MenuComponent) {
    throw new Error("unsopported operation");
  }
  getChild(i: number) {
    throw new Error("unsopported operation");
  }
}

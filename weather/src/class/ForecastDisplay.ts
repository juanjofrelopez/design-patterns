import Observer from "../interface/Observer";
import DisplayElement from "../interface/DisplayElement";

export default class ForecastDisplay implements Observer, DisplayElement {
  update(temperature: number, humidity: number, pressure: number): void {}
  display(): void {}
}

import Observer from "../interface/Observer";
import DisplayElement from "../interface/DisplayElement";
import WeatherData from "./WeatherData";

export default class StatisticsDisplay implements Observer, DisplayElement {
  // We store a reference to the Subject because in the future we might want to unregister ourselves
  private weatherData: WeatherData;
  private totalTemp: number = 0;
  private qTemp: number = 0;

  constructor(w: WeatherData) {
    this.weatherData = w;
    w.registerObserver(this);
  }

  update(): void {
    this.qTemp += 1;
    this.totalTemp += this.weatherData.getTemperature();
    this.display();
  }

  display(): void {
    console.log(`Average temperature: ${this.totalTemp / this.qTemp}`);
  }
}

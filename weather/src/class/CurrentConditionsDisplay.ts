import Observer from "../interface/Observer";
import DisplayElement from "../interface/DisplayElement";
import WeatherData from "./WeatherData";

export default class CurrentConditionDisplay
  implements Observer, DisplayElement
{
  private temperature: number;
  private humidity: number;
  // We store a reference to the Subject because in the future we might want to unregister ourselves
  private weatherData: WeatherData;

  constructor(w: WeatherData) {
    this.weatherData = w;
    w.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.humidity = humidity;
    this.temperature = temperature;
    // There are better ways to design how the data gets displayed.
    // We will see some of them when we learn MVC pattern.
    // For now its ok!
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}° ${this.humidity}%`);
  }
}

import Observer from "../interface/Observer";
import DisplayElement from "../interface/DisplayElement";
import WeatherData from "./WeatherData";

export default class ForecastDisplay implements Observer, DisplayElement {
  // We store a reference to the Subject because in the future we might want to unregister ourselves
  private weatherData: WeatherData;
  private lastPressure: number = 29.93;
  private currentPressure: number;

  constructor(w: WeatherData) {
    this.weatherData = w;
    w.registerObserver(this);
  }

  update(): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();
    this.display();
  }

  display(): void {
    if(this.currentPressure > this.lastPressure){
      console.log("Improving weather on the way!")
    }else{
      console.log("Weather looks bad!")
    }
  }
}

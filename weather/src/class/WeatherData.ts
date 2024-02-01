import Observer from "../interface/Observer";
import Subject from "../interface/Subject";

export default class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((o: Observer) => {
      o.update(this.temperature, this.humidity, this.pressure);
    });
  }

  // this method is called every time there's an update
  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature() {
    return "most recent temperature!";
  }

  getHumidity() {
    return "most recent humidity!";
  }

  getPressure() {
    return "most recent pressure!";
  }
}

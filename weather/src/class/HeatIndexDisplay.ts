/*
private float computeHeatIndex(float t, float rh) {
		float index = (float)((16.923 + (0.185212 * t) + (5.37941 * rh) - (0.100254 * t * rh) 
			+ (0.00941695 * (t * t)) + (0.00728898 * (rh * rh)) 
			+ (0.000345372 * (t * t * rh)) - (0.000814971 * (t * rh * rh)) +
			(0.0000102102 * (t * t * rh * rh)) - (0.000038646 * (t * t * t)) + (0.0000291583 * 
			(rh * rh * rh)) + (0.00000142721 * (t * t * t * rh)) + 
			(0.000000197483 * (t * rh * rh * rh)) - (0.0000000218429 * (t * t * t * rh * rh)) +
			0.000000000843296 * (t * t * rh * rh * rh)) -
			(0.0000000000481975 * (t * t * t * rh * rh * rh)));
		return index;
	}

 */
import Observer from "../interface/Observer";
import DisplayElement from "../interface/DisplayElement";
import WeatherData from "./WeatherData";

export default class HeatIndexDisplay implements Observer, DisplayElement {
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
    console.log(
      `Current heat index: ${this.calculateHeatIndex(
        this.temperature,
        this.humidity
      )}°`
    );
  }

  private calculateHeatIndex(t: number, rh: number): number {
    return Number(
      16.923 +
        0.185212 * t +
        5.37941 * rh -
        0.100254 * t * rh +
        0.00941695 * (t * t) +
        0.00728898 * (rh * rh) +
        0.000345372 * (t * t * rh) -
        0.000814971 * (t * rh * rh) +
        0.0000102102 * (t * t * rh * rh) -
        0.000038646 * (t * t * t) +
        0.0000291583 * (rh * rh * rh) +
        0.00000142721 * (t * t * t * rh) +
        0.000000197483 * (t * rh * rh * rh) -
        0.0000000218429 * (t * t * t * rh * rh) +
        0.000000000843296 * (t * t * rh * rh * rh) -
        0.0000000000481975 * (t * t * t * rh * rh * rh)
    );
  }
}

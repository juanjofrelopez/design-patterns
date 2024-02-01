import WeatherData from "./src/class/WeatherData";
import CurrentConditionDisplay from "./src/class/CurrentConditionsDisplay";
import HeatIndexDisplay from "./src/class/HeatIndexDisplay";

console.log("--------------PROGRAM STARTS HERE-----------");

const weatherData = new WeatherData();
new CurrentConditionDisplay(weatherData);
new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.5);
weatherData.setMeasurements(82, 70, 29.2);
console.log("-------------PROGRAM ENDS HERE-----------");

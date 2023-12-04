import { WeatherLocation } from './weather-location.model';
import { ForecastDay } from './forecast-day.model';
import { HistoryForecastDay } from './history-forecastday.model';

export class HistoryWeather {
    location: WeatherLocation;
    forecast: HistoryForecastDay;

    constructor(data: any) {
        if (data) {
            this.location = new WeatherLocation(data.location);
            this.forecast = new HistoryForecastDay(data.forecast);
        }
        else {
            this.location = new WeatherLocation(null);
            this.forecast = new HistoryForecastDay(null);
        }
    }
}
import { WeatherLocation } from './weather-location.model';
import { WeatherCurrent } from './weather-current.model'

export class CurrentWeather {
    location: WeatherLocation;
    current: WeatherCurrent;

    constructor(data: any) {
        if (data) {
            this.location = new WeatherLocation(data.location);
            this.current = new WeatherCurrent(data.current);
        }
        else {
            this.location = new WeatherLocation(null);
            this.current = new WeatherCurrent(null);
        }
    }
}

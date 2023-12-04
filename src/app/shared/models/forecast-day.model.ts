import { WeatherDay } from "./weather-day.model";

export class ForecastDay {
    date: Date;
    day: WeatherDay;

    constructor(data: any) {
        if (data) {
            // console.log(data.date_epoch);
            this.date = new Date(data.date_epoch*1000); //multiple by 1000 to get miilliseconds

            if (data.day) {
                this.day = new WeatherDay(data.day);
            }

            if (data.forecastday) {
                this.day = new WeatherDay(data.forecastday);
            }
        }
        else {
            this.date = new Date();
            this.day = new WeatherDay(null); 
        }
    }
}


/*
                "date": "2022-03-31",
                "date_epoch": 1648684800,
                "day": {
                        "maxtemp_c": 18.1,
                        "maxtemp_f": 64.6,
                        "mintemp_c": 10.2,
                        "mintemp_f": 50.4,
                        "avgtemp_c": 13.9,
                        "avgtemp_f": 57.0,
                        "maxwind_mph": 7.6,
                        "maxwind_kph": 12.2,
                        "totalprecip_mm": 0.0,
                        "totalprecip_in": 0.0,
                        "avgvis_km": 10.0,
                        "avgvis_miles": 6.0,
                        "avghumidity": 71.0,
                        "daily_will_it_rain": 0,
                        "daily_chance_of_rain": 0,
                        "daily_will_it_snow": 0,
                        "daily_chance_of_snow": 0,
                        "condition": {
                            "text": "Partly cloudy",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            "code": 1003
                        },
                        "uv": 6.0
                    },
*/

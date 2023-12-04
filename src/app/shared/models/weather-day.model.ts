import { WeatherConditions } from "./weather-condition.model";

export class WeatherDay {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;        
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: WeatherConditions;
    uv: number;

    constructor(data: any) {
        if (data) {
            this.maxtemp_c = data.maxtemp_c;            
            this.maxtemp_f = data.maxtemp_f;
            this.mintemp_c = data.mintemp_c;
            this.mintemp_f = data.mintemp_f;
            this.avgtemp_c = data.avgtemp_c;
            this.avgtemp_f = data.avgtemp_f;
            this.maxwind_mph = data.maxwind_mph;
            this.maxwind_kph = data.maxwind_kph; 
            this.totalprecip_mm = data.totalprecip_mm;
            this.totalprecip_in = data.totalprecip_in;
            this.avgvis_km = data.avgvis_km; 
            this.avgvis_miles = data.avgvis_miles; 
            this.avghumidity = data.avghumidity;
            this.daily_will_it_rain = data.daily_will_it_rain; 
            this.daily_chance_of_rain = data.daily_chance_of_rain;
            this.daily_will_it_snow = data.daily_will_it_snow;
            this.daily_chance_of_snow = data.daily_chance_of_snow;
            this.condition = new WeatherConditions(data.condition);
            this.uv = data.uv;
        }
        else {
            this.maxtemp_c = 0;            
            this.maxtemp_f = 0;
            this.mintemp_c = 0;
            this.mintemp_f = 0;
            this.avgtemp_c = 0;
            this.avgtemp_f = 0;
            this.maxwind_mph = 0;
            this.maxwind_kph = 0; 
            this.totalprecip_mm = 0;
            this.totalprecip_in = 0;
            this.avgvis_km = 0; 
            this.avgvis_miles = 0; 
            this.avghumidity = 0;
            this.daily_will_it_rain = 0; 
            this.daily_chance_of_rain = 0;
            this.daily_will_it_snow = 0;
            this.daily_chance_of_snow = 0;
            this.condition = new WeatherConditions(null);
            this.uv = 0;
        }
    }
}
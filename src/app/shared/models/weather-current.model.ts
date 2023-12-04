import { WeatherConditions } from './weather-condition.model';

export class WeatherCurrent {
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: WeatherConditions;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;


    constructor(data: any) {
        if (data) {
            this.temp_c = data.temp_c;
            this.temp_f = data.temp_f;
            this.is_day = data.is_day;
            this.condition = new WeatherConditions(data.condition);
            this.wind_mph = data.wind_mph;
            this.wind_kph = data.wind_kph;
            this.wind_degree = data.wind_degree;
            this.wind_dir = data.wind_dir;
            this.pressure_mb = data.pressure_mb;
            this.pressure_in = data.pressure_in;
            this.precip_mm = data.precip_mm;
            this.precip_in = data.precip_in;
            this.humidity = data.humidity;
            this.cloud = data.cloud;
            this.feelslike_c = data.feelslike_c;
            this.feelslike_f = data.feelslike_f;
            this.vis_km = data.vis_km;
            this.vis_miles = data.vis_miles;
            this.uv = data.uv
            this.gust_mph = data.gust_mph;
            this.gust_kph = data.gust_kph;
        } else {
            this.temp_c = 0;
            this.temp_f = 0;
            this.is_day = 0;
            this.condition = new WeatherConditions(null);
            this.wind_mph = 0;
            this.wind_kph = 0;
            this.wind_degree = 0;
            this.wind_dir = '';
            this.pressure_mb = 0;
            this.pressure_in = 0;
            this.precip_mm = 0;
            this.precip_in = 0;
            this.humidity = 0;
            this.cloud = 0;
            this.feelslike_c = 0;
            this.feelslike_f = 0;
            this.vis_km = 0;
            this.vis_miles = 0;
            this.uv = 0;
            this.gust_mph = 0;
            this.gust_kph = 0;
        }
    }
}
import { ForecastDay } from "./forecast-day.model";

export class HistoryForecastDay {
    forecastday: ForecastDay[];

    constructor(data: any) {
        if (data) {
            this.forecastday = data.forecastday;
        }
        else {
            this.forecastday = null;
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { WeatherLocation } from '../shared/models/weather-location.model';
import { CurrentWeather } from '../shared/models/current-weather.model';
import { ForecastDay } from '../shared/models/forecast-day.model';
import { WeatherDay } from '../shared/models/weather-day.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public currentWeather = new CurrentWeather(null);
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
  public days: ForecastDay[] = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    // returns the current days weather
    this.weatherService.getCurrentWeather('91345').subscribe ( (res: CurrentWeather) => {
      this.currentWeather = res;
      console.log(this.currentWeather);
    });

    // returns array of 3 days worth of weather
    this.weatherService.getWeatherForcast('91345').subscribe((res: any) => {
      this.days = res.forecast.forecastday;
      console.log(this.days);
    });
  }

}

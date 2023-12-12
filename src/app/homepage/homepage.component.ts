import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { WeatherLocation } from '../shared/models/weather-location.model';
import { CurrentWeather } from '../shared/models/current-weather.model';
import { ForecastDay } from '../shared/models/forecast-day.model';
import { WeatherDay } from '../shared/models/weather-day.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  zipcodeForm = new FormGroup({
    zipcode: new FormControl(''),
  });

  public currentWeather = new CurrentWeather(null);

  public days: ForecastDay[] = [];

  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // returns the current days weather
    this.weatherService.getCurrentWeather('91345').subscribe((res: CurrentWeather) => {
      this.currentWeather = res;
      console.log(this.currentWeather);
    });

    // returns array of 3 days worth of weather
    this.weatherService.getWeatherForcast('91345').subscribe((res: any) => {
      this.days = res.forecast.forecastday;
    });
  }

  submit() {
    const zipcode = this.zipcodeForm.get("zipcode").value;

    this.weatherService.getWeatherForcast(zipcode).subscribe((res: any) => {
      this.days = res.forecast.forecastday;
    });
    
  }

}

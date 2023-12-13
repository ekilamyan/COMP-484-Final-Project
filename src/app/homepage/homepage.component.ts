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

  public units = 'F'
  public oppositeUnits = 'C'

  public currentWeather = new CurrentWeather(null);
  public currentDate = '';

  public days: ForecastDay[] = [];

  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // returns the current days weather
    this.weatherService.getCurrentWeather('91324').subscribe((res: CurrentWeather) => {
      this.currentWeather = res;
      console.log(this.currentWeather);
    });

    // returns array of 3 days worth of weather
    this.weatherService.getWeatherForcast('91324').subscribe((res: any) => {
      this.currentDate = res.forecast.forecastday[0].date;
      for (let i = 1; i < res.forecast.forecastday.length; i++) {
        this.days.push(res.forecast.forecastday[i]);
      }
    });
  }

  changeUnits() {
    if (this.units == 'F') {
      this.units = 'C';
      this.oppositeUnits = 'F';
    }
    else {
      this.units = 'F';
      this.oppositeUnits = 'C';
    }
  }

  submit() {
    const zipcode = this.zipcodeForm.get("zipcode").value;
    this.days = [];

    this.weatherService.getCurrentWeather(zipcode).subscribe((res: CurrentWeather) => {
      this.currentWeather = res;
      // console.log(this.currentWeather);
    });

    this.weatherService.getWeatherForcast(zipcode).subscribe((res: any) => {
      this.currentDate = res.forecast.forecastday[0].date;
      for (let i = 1; i < res.forecast.forecastday.length; i++) {
        console.log(res.forecast.forecastday[i]);
        this.days.push(res.forecast.forecastday[i]);
      }
    });

  }

}

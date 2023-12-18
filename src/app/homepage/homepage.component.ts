import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { WeatherLocation } from '../shared/models/weather-location.model';
import { CurrentWeather } from '../shared/models/current-weather.model';
import { ForecastDay } from '../shared/models/forecast-day.model';
import { WeatherDay } from '../shared/models/weather-day.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud, faBolt, faCloudShowersHeavy, faCloudMeatball } from '@fortawesome/free-solid-svg-icons'; // rain faCloudBolt
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faCalculator, faCloudRain, faWind, faPlus, IconDefinition, faQuestion } from '@fortawesome/free-solid-svg-icons';

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

  getWeatherIcon(condition: string) {

    if (condition.toLowerCase() === 'clear') {
      return faSun;
    }
    else if (condition.toLowerCase() === 'sunny') {
      return faSun;
    }
    else if (condition.toLowerCase() === 'clear') {
      return faSun;
    }
    else if (condition.toLowerCase() === 'partly cloudy') {
      return faCloudSun;
    }
    else if (condition.toLowerCase() === 'cloudy') {
      return faCloud;
    }
    else if (condition.toLowerCase() === 'overcast') {
      return faCloudSun;
    }
    else if (condition.toLowerCase() === 'mist') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'patchy rain possible') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'patchy snow possible') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'Patchy freezing drizzle possible') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'thundery outbreaks possible') {
      return faBolt;
    }
    else if (condition.toLowerCase() === 'thundery outbreaks possible') {
      return faBolt;
    }
    else if (condition.toLowerCase() === 'blowing snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'blowing snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'blizzard') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'fog') {
      return faCloud;
    }
    else if (condition.toLowerCase() === 'freezing fog') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'patchy light drizzle') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'light drizzle') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'freezing drizzle	') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'heavy freezing drizzle') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'patchy light rain') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'light rain') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'moderate rain at times') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'moderate rain') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'heavy rain at times') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'heavy rain') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'light freezing rain') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'moderate or heavy freezing rain') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'light sleet') {
      return faCloudMeatball;
    }
    else if (condition.toLowerCase() === 'moderate or heavy sleet') {
      return faCloudMeatball;
    }
    else if (condition.toLowerCase() === 'patchy light snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'light snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'patchy moderate snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'moderate snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'patchy heavy snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'heavy snow') {
      return faSnowflake;
    }
    else if (condition.toLowerCase() === 'ice pellets') {
      return faCloudMeatball;
    }
    else if (condition.toLowerCase() === 'light rain shower') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'moderate or heavy rain shower') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'torrential rain shower') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'light sleet showers') {
      return faCloudMeatball;
    }
    else if (condition.toLowerCase() === 'light snow showers') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'moderate or heavy snow showers') {
      return faCloudShowersHeavy;
    }
    else if (condition.toLowerCase() === 'light showers of ice pellets') {
      return faCloudMeatball;
    }
    else if (condition.toLowerCase() === 'moderate or heavy showers of ice pellets') {
      return faCloudMeatball;
    }
    else if (condition.toLowerCase() === 'patchy light rain with thunder	') {
      return faBolt;
    }
    else if (condition.toLowerCase() === 'moderate or heavy rain with thunder') {
      return faBolt;
    }
    else if (condition.toLowerCase() === 'patchy light snow with thunder') {
      return faBolt;
    }
    else if (condition.toLowerCase() === 'moderate or heavy snow with thunder') {
      return faBolt;
    }
    else {
      return faQuestion;
    }
  }

}

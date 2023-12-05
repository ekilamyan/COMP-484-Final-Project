import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
  public url_2 = 'https://weatherapi-com.p.rapidapi.com/forecast.json?days=3&q=';
  public apiKey = '&appid=0a42a7299bb4c8e5ef4cb6f154dcc250'

  constructor(private http: HttpClient) { }

  getForecastCoordinates(lat: string, lon: string): Observable<any> {
    return (this.http.get(this.url + this.apiKey + '&lat=' + lat + '&lon=' + lon))
  }
  
  getForecastZip(zip: string): Observable<any> {
    return (this.http.get(this.url + this.apiKey + '&zip=' + zip));
  }
  
  getCurrentWeather(zip: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/octet-stream')
      .set('X-RapidAPI-Key', 'd94b0d49f1msha4907e79a78f48ep1f7ce8jsn4fdf45ef3f9a')
      .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');
    return (this.http.get(this.url + zip, { 'headers': headers }))
  }

  getWeatherForcast(zip: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/octet-stream')
      .set('X-RapidAPI-Key', 'd94b0d49f1msha4907e79a78f48ep1f7ce8jsn4fdf45ef3f9a')
      .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');
    return (this.http.get(this.url_2 + zip, { 'headers': headers }))
  }
}

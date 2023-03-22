import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  weatherData: any;

  constructor(private weatherService: WeatherServiceService) { }

  getData(city:any) {
    this.weatherService.getWeatherData(city).subscribe(data => {
      console.log(data)
      this.weatherData = data;
    });
  }
}

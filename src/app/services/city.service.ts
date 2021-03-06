import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OpenWeather } from '../configs/openweather.config';
import {Json} from '../configs/json.config';

@Injectable()
export class CityService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  //function to get city data from openweather api and return that to city-find.component.ts
  searchCity(searchedText) {
  	return this.http.get(OpenWeather.search_api + searchedText + "&units=metric" + "&appid=" +OpenWeather.appId)
  		.map(data => data.json(),
  			(error: any) => this.handleError(error));
  }

  private handleError(error: Response) {
  	return Observable.throw(error.statusText);
  }

  //method to add cities to database
  addCity(cities) {
    return this.http.post(Json.db_url+"db",cities,{headers: this.headers})
    .map(data => data.json(),
      (error: any) => this.handleError(error));
  }

  showFav() {
    return this.http.get(Json.db_url+"db")
    .map(data => data.json(),
      (error:any) => this.handleError(error));
  }

}

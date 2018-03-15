import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from '../../../services/city.service'

@Component({
  selector: 'app-city-find',
  templateUrl: './city-find.component.html',
  styleUrls: ['./city-find.component.css']
})
export class CityFindComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
  public searchedText: string='';
  public citiesList : any;

  constructor(private cityService : CityService) { }

  ngOnInit() {
  }

  // Function to get search text and make service call to get cities from openWeather API
  searchCity() {
  	this.cityService.searchCity(this.searchedText).subscribe((res) =>{
  	this.citiesList = res;
  	this.success.emit({
      'citiesList': this.citiesList
    });
  	}, (error) =>{

  	})
  }

}

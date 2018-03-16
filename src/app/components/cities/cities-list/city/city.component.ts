import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../../../../services/city.service'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

	@Input() cities: any;

  constructor(private cityService : CityService) { }

  ngOnInit() {
  }

  addCity(cities) {
  	this.cityService.addCity(cities).subscribe((res) => {

  	},(error) => {
  		
  	});

  }

}

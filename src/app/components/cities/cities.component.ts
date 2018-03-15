import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

	public cities :any;

  constructor() { }

  ngOnInit() {
  }

  // Update cities list based on search text
  setCitylist(event) {
  	this.cities = event.citiesList;
  }

}

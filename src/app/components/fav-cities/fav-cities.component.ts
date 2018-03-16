import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-fav-cities',
  templateUrl: './fav-cities.component.html',
  styleUrls: ['./fav-cities.component.css']
})
export class FavCitiesComponent implements OnInit {

	public favList : Array<any> = [];

  constructor(private cityServive : CityService) { }

  ngOnInit() {
  	this.cityServive.showFav().subscribe((res) => {
  		this.favList = res.db;

  	},(error) => {

  	})
  }

}

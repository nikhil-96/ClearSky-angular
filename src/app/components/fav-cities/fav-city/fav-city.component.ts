import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fav-city',
  templateUrl: './fav-city.component.html',
  styleUrls: ['./fav-city.component.css']
})
export class FavCityComponent implements OnInit {

	@Input() fav : any;

  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CitiesComponent } from './components/cities/cities.component';
import { FavCitiesComponent } from './components/fav-cities/fav-cities.component';
import { CityFindComponent } from './components/cities/city-find/city-find.component';
import { CitiesListComponent } from './components/cities/cities-list/cities-list.component';
import { CityComponent } from './components/cities/cities-list/city/city.component';
import { FavCityComponent } from './components/fav-cities/fav-city/fav-city.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityService } from './services/city.service';

const routes :Routes = [
  {path: '', redirectTo:'/cities',pathMatch:'full'},
  {path: 'cities', component:CitiesComponent},
  {path: 'favourite', component:FavCitiesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CitiesComponent,
    FavCitiesComponent,
    CityFindComponent,
    CitiesListComponent,
    CityComponent,
    FavCityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

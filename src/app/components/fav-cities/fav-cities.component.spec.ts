import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCitiesComponent } from './fav-cities.component';

describe('FavCitiesComponent', () => {
  let component: FavCitiesComponent;
  let fixture: ComponentFixture<FavCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

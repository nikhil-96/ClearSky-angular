import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCityComponent } from './fav-city.component';

describe('FavCityComponent', () => {
  let component: FavCityComponent;
  let fixture: ComponentFixture<FavCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

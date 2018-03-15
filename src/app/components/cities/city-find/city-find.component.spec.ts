import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFindComponent } from './city-find.component';

describe('CityFindComponent', () => {
  let component: CityFindComponent;
  let fixture: ComponentFixture<CityFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

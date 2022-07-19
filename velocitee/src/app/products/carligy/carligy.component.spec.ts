import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarligyComponent } from './carligy.component';

describe('CarligyComponent', () => {
  let component: CarligyComponent;
  let fixture: ComponentFixture<CarligyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarligyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarligyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

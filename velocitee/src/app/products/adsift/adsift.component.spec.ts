import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsiftComponent } from './adsift.component';

describe('AdsiftComponent', () => {
  let component: AdsiftComponent;
  let fixture: ComponentFixture<AdsiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

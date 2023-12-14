import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardienReservationComponent } from './gardien-reservation.component';

describe('GardienReservationComponent', () => {
  let component: GardienReservationComponent;
  let fixture: ComponentFixture<GardienReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardienReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardienReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

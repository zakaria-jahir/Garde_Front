import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidreservationComponent } from './validreservation.component';

describe('ValidreservationComponent', () => {
  let component: ValidreservationComponent;
  let fixture: ComponentFixture<ValidreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

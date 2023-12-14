import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardiensComponent } from './gardiens.component';

describe('GardiensComponent', () => {
  let component: GardiensComponent;
  let fixture: ComponentFixture<GardiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardiensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

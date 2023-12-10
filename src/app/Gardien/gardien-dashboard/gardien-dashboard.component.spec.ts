import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardienDashboardComponent } from './gardien-dashboard.component';

describe('GardienDashboardComponent', () => {
  let component: GardienDashboardComponent;
  let fixture: ComponentFixture<GardienDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardienDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardienDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

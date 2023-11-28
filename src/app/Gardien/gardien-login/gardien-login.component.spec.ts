import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardienLoginComponent } from './gardien-login.component';

describe('GardienLoginComponent', () => {
  let component: GardienLoginComponent;
  let fixture: ComponentFixture<GardienLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardienLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardienLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

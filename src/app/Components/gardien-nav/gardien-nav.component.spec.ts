import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardienNavComponent } from './gardien-nav.component';

describe('GardienNavComponent', () => {
  let component: GardienNavComponent;
  let fixture: ComponentFixture<GardienNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardienNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardienNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

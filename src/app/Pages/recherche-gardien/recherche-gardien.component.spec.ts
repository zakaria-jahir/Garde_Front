import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheGardienComponent } from './recherche-gardien.component';

describe('RechercheGardienComponent', () => {
  let component: RechercheGardienComponent;
  let fixture: ComponentFixture<RechercheGardienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheGardienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheGardienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

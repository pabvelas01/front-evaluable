import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCarreraComponent } from './administrar-carrera.component';

describe('AdministrarCarreraComponent', () => {
  let component: AdministrarCarreraComponent;
  let fixture: ComponentFixture<AdministrarCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

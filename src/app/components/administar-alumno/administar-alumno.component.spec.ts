import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministarAlumnoComponent } from './administar-alumno.component';

describe('AdministarAlumnoComponent', () => {
  let component: AdministarAlumnoComponent;
  let fixture: ComponentFixture<AdministarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministarAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

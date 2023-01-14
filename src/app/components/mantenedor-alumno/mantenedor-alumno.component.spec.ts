import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorAlumnoComponent } from './mantenedor-alumno.component';

describe('MantenedorAlumnoComponent', () => {
  let component: MantenedorAlumnoComponent;
  let fixture: ComponentFixture<MantenedorAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

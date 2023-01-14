import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorCarreraComponent } from './mantenedor-carrera.component';

describe('MantenedorCarreraComponent', () => {
  let component: MantenedorCarreraComponent;
  let fixture: ComponentFixture<MantenedorCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedorCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

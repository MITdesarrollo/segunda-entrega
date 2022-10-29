import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasAlumnosComponent } from './lista-alumnos.component';

describe('TablasAlumnosComponent', () => {
  let component: TablasAlumnosComponent;
  let fixture: ComponentFixture<TablasAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

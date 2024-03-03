import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPage } from './alumnos.page';

describe('AlumnosPage', () => {
  let component: AlumnoPage;
  let fixture: ComponentFixture<AlumnoPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(AlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

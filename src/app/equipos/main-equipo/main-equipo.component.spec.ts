import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEquipoComponent } from './main-equipo.component';

describe('MainEquipoComponent', () => {
  let component: MainEquipoComponent;
  let fixture: ComponentFixture<MainEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoViewComponent } from './equipo-view.component';

describe('EquipoViewComponent', () => {
  let component: EquipoViewComponent;
  let fixture: ComponentFixture<EquipoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

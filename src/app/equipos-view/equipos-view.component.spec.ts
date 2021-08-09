import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposViewComponent } from './equipos-view.component';

describe('EquiposViewComponent', () => {
  let component: EquiposViewComponent;
  let fixture: ComponentFixture<EquiposViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

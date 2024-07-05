import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisdiccionDetalleComponent } from './jurisdiccion-detalle.component';

describe('JurisdiccionDetalleComponent', () => {
  let component: JurisdiccionDetalleComponent;
  let fixture: ComponentFixture<JurisdiccionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurisdiccionDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JurisdiccionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

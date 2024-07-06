import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerolineaDetalleComponent } from './aerolinea-detalle.component';

describe('AerolineaDetalleComponent', () => {
  let component: AerolineaDetalleComponent;
  let fixture: ComponentFixture<AerolineaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AerolineaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerolineaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

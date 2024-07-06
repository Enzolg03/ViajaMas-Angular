import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeropuertoDetalleComponent } from './aeropuerto-detalle.component';

describe('AeropuertoDetalleComponent', () => {
  let component: AeropuertoDetalleComponent;
  let fixture: ComponentFixture<AeropuertoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeropuertoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeropuertoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

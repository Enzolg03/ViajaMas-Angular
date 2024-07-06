import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloDetalleComponent } from './vuelo-detalle.component';

describe('VueloDetalleComponent', () => {
  let component: VueloDetalleComponent;
  let fixture: ComponentFixture<VueloDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VueloDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueloDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionDetalleComponent } from './avion-detalle.component';

describe('AvionDetalleComponent', () => {
  let component: AvionDetalleComponent;
  let fixture: ComponentFixture<AvionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvionDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

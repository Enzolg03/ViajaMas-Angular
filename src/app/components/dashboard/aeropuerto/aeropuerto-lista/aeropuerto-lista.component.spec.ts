import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeropuertoListaComponent } from './aeropuerto-lista.component';

describe('AeropuertoListaComponent', () => {
  let component: AeropuertoListaComponent;
  let fixture: ComponentFixture<AeropuertoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeropuertoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeropuertoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

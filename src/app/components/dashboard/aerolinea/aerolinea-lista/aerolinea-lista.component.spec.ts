import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerolineaListaComponent } from './aerolinea-lista.component';

describe('AerolineaListaComponent', () => {
  let component: AerolineaListaComponent;
  let fixture: ComponentFixture<AerolineaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AerolineaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerolineaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

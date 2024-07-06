import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloListaComponent } from './vuelo-lista.component';

describe('VueloListaComponent', () => {
  let component: VueloListaComponent;
  let fixture: ComponentFixture<VueloListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VueloListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

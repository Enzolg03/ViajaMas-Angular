import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisdiccionListaComponent } from './jurisdiccion-lista.component';

describe('JurisdiccionListaComponent', () => {
  let component: JurisdiccionListaComponent;
  let fixture: ComponentFixture<JurisdiccionListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurisdiccionListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JurisdiccionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

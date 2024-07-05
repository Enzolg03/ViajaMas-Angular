import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionListaComponent } from './avion-lista.component';

describe('AvionListaComponent', () => {
  let component: AvionListaComponent;
  let fixture: ComponentFixture<AvionListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvionListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

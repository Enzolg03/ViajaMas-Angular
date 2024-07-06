import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisdiccionComponent } from './jurisdiccion.component';

describe('JurisdiccionComponent', () => {
  let component: JurisdiccionComponent;
  let fixture: ComponentFixture<JurisdiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurisdiccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurisdiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

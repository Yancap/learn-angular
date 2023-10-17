import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDeForaComponent } from './componente-de-fora.component';

describe('ComponenteDeForaComponent', () => {
  let component: ComponenteDeForaComponent;
  let fixture: ComponentFixture<ComponenteDeForaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteDeForaComponent]
    });
    fixture = TestBed.createComponent(ComponenteDeForaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

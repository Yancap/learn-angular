import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasDeAtributoComponent } from './diretivas-de-atributo.component';

describe('DiretivasDeAtributoComponent', () => {
  let component: DiretivasDeAtributoComponent;
  let fixture: ComponentFixture<DiretivasDeAtributoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasDeAtributoComponent],
    });
    fixture = TestBed.createComponent(DiretivasDeAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

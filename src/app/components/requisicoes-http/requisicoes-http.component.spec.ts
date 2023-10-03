import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesHttpComponent } from './requisicoes-http.component';

describe('RequisicoesHttpComponent', () => {
  let component: RequisicoesHttpComponent;
  let fixture: ComponentFixture<RequisicoesHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequisicoesHttpComponent]
    });
    fixture = TestBed.createComponent(RequisicoesHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

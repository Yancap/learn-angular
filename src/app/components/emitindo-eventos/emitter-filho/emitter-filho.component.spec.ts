import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterFilhoComponent } from './emitter-filho.component';

describe('EmitterFilhoComponent', () => {
  let component: EmitterFilhoComponent;
  let fixture: ComponentFixture<EmitterFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitterFilhoComponent]
    });
    fixture = TestBed.createComponent(EmitterFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

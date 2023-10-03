import { TestBed } from '@angular/core/testing';

import { RequisicoesHttpService } from './requisicoes-http.service';

describe('RequisicoesHttpService', () => {
  let service: RequisicoesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisicoesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

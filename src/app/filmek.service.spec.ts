import { TestBed } from '@angular/core/testing';

import { FilmekService } from './filmek.service';

describe('FilmekService', () => {
  let service: FilmekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

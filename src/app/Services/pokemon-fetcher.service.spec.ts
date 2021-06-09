import { TestBed } from '@angular/core/testing';

import { PokemonFetcherService } from './pokemon-fetcher.service';

describe('PokemonFetcherService', () => {
  let service: PokemonFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IPokemon } from "../Interfaces/ipokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonFetcherService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  pokemons: Array<IPokemon> = [];
  constructor( private http: HttpClient ) {
   }

  fetchAllPokemons() {
    for (let i = 1; i < 2; i++) {
      this.http.get<IPokemon>(this.baseUrl + i).subscribe( data => {
        this.pokemons.push(data);
      });
    }
  }

  fetchPokemon(id: number) {
    return this.http.get<IPokemon>(this.baseUrl + id);
  }
}

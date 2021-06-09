import { Component } from '@angular/core';
import { IPokemon } from './Interfaces/ipokemon';

import { PokemonFetcherService } from "./Services/pokemon-fetcher.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeApi-angular';
  pokemons: Array<IPokemon> = [];

  constructor(private pokemonFetcher:PokemonFetcherService) {
    for (let i = 1; i < 2; i++) {
      this.pokemonFetcher.fetchPokemon(i).subscribe( data => {
        this.pokemons.push(data);
      }, error => {
        console.error(error);
      })
    }
  }
}

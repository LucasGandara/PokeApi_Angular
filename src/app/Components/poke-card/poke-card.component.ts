import { Component, Input } from '@angular/core';
import { IPokemon } from 'src/app/Interfaces/ipokemon';
import { PokemonFetcherService } from "../../Services/pokemon-fetcher.service";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent{
  @Input() pokemon: IPokemon;
  spriteNames: string[];
  flippedCard: boolean;

  constructor(private pokemonFetcher: PokemonFetcherService) {
    this.pokemon = {
      id: 1,
      name: 'pokemon',
      sprites: {
        front_default: 'default',
        back_default: 'default',
        back_female: 'default',
        back_shiny: 'default',
        back_shiny_female: 'default',
        front_female: 'defatult',
        front_shiny: 'default',
        front_shiny_female: 'default'
      },
      types: [
        {
          type: {
            name: 'fire'
          }
        },
        {
          type: {
            name: 'fire'
          }
        }
      ],
      weight: 50

    };
    this.spriteNames = Object.keys(this.pokemon.sprites);
    this.flippedCard = false;
   }

  onClick() {
    this.flippedCard = !this.flippedCard;
  }

}

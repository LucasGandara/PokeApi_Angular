import { Component, Input } from '@angular/core';
import { IPokemon, ISprites } from 'src/app/Interfaces/ipokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css'],
})
export class PokeCardComponent {
  @Input() pokemon: IPokemon;
  spriteNames: string[];
  isFlipped: boolean;
  spriteCounter: number;
  currentSprite: string | null;

  constructor() {
    this.pokemon = {
      id: 1,
      name: 'pokemon',
      sprites: {
        front_default: '../../assets/bulbasaur.png',
        back_default: 'default',
        back_female: 'default',
        back_shiny: 'default',
        back_shiny_female: 'default',
        front_female: 'defatult',
        front_shiny: 'default',
        front_shiny_female: 'default',
      },
      types: [
        {
          type: {
            name: 'grass',
          },
        },
        {
          type: {
            name: 'poison',
          },
        },
      ],
      weight: 50,
    };
    this.spriteNames = Object.keys(this.pokemon.sprites);
    this.isFlipped = false;
    this.spriteCounter = 0;
    this.currentSprite = '';
  }

  onClick(): void {
    this.isFlipped = !this.isFlipped;
    this.currentSprite = this.pokemon.sprites['front_default'];
  }

  onNextSprite(): void {
    this.currentSprite = null;
    while (this.currentSprite === null) {
      this.spriteCounter = this.spriteCounter <= 6 ? this.spriteCounter + 1 : 0;
      switch (this.spriteCounter) {
        case 0:
          this.currentSprite = this.pokemon.sprites.front_default;
          break;
        case 1:
          this.currentSprite = this.pokemon.sprites.back_female;
          break;
        case 2:
          this.currentSprite = this.pokemon.sprites.back_shiny;
          break;
        case 3:
          this.currentSprite = this.pokemon.sprites.back_shiny_female;
          break;
        case 4:
          this.currentSprite = this.pokemon.sprites.front_female;
          break;
        case 5:
          this.currentSprite = this.pokemon.sprites.front_shiny;
          break;
        case 6:
          this.currentSprite = this.pokemon.sprites.front_shiny_female;
          break;
        default:
          this.currentSprite = this.pokemon.sprites.front_default;
          break;
      }
    }
  }
}

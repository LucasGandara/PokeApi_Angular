export interface IPokemon {
  id: number,
  name: string,
  weight: number,
  sprites: {
    front_default: string,
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
  },
  types: [
    {
      type: {
        name: string
      }
    },
    {
      type: {
        name: string
      }
    }
  ]
}

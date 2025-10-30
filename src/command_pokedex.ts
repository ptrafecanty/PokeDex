import type { State } from "./state.js";

export async function commandPokedex(state: State) {

  const pokedex = state.caughtPokemon;

  if (Object.keys(pokedex).length === 0) {
    throw new Error("you have not caught any pokemon");
  }

  for (const pokemon of Object.values(pokedex)) {
    console.log(`- ${pokemon.name}`);
  }
  
}

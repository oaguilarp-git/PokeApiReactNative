import { Pokemon } from "@/models/pokemon-list.models";

export type PokemonStore = {
  pokemons: Pokemon[];
  next: string;
  loading: boolean;
  error: string;
  loadingMore: boolean;
  getPokemons: () => Promise<void>;
  loadMorePokemons: () => Promise<void>;
};

import { getPokemonsService } from "@/services/pokemonService";
import { create } from "zustand";
import { PokemonStore } from "./models";

export const usePokemonStore = create<PokemonStore>((set, get) => ({
  pokemons: [],
  next: "",
  loading: false,
  error: "",
  loadingMore: false,

  getPokemons: async () => {
    const { pokemons, loading } = get();

    if (pokemons.length > 0 || loading) return;

    try {
      set({ loading: true });
      const response = await getPokemonsService();
      set({
        pokemons: response.results,
        next: response.next,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error al cargar los Pokémon";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  loadMorePokemons: async () => {
    const { next, loadingMore } = get();
    if (!next || loadingMore) return;
    try {
      set({ loadingMore: true });
      const response = await getPokemonsService(next);
      set({
        pokemons: [...get().pokemons, ...response.results],
        next: response.next,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error al cargar los Pokémon";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },
}));

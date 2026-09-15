import { usePokemonStore } from "@/store/usePokemonStore";
import { useEffect } from "react";

const useGetPokemons = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const loading = usePokemonStore((state) => state.loading);
  const loadingMore = usePokemonStore((state) => state.loadingMore);
  const getPokemons = usePokemonStore((state) => state.getPokemons);
  const loadMorePokemons = usePokemonStore((state) => state.loadMorePokemons);

  useEffect(() => {
    void getPokemons();
  }, [getPokemons]);

  return {
    loading,
    pokemons,
    loadMorePokemons,
    loadingMore,
  };
};

export default useGetPokemons;

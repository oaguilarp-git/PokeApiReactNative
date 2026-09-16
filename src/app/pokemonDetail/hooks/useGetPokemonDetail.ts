import { PokemonDetail } from "@/models/pokemon-detail.models";
import { getDetailService } from "@/services/pokemonService";
import { useEffect, useState } from "react";

const useGetPokemonDetail = (namePokemon: string) => {
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
    null,
  );
  useEffect(() => {
    getDetailService(namePokemon)
      .then((response) => {
        setPokemonDetail(response);
      })
      .catch((cause: unknown) => {
        setError(
          cause instanceof Error ? cause.message : "Error al cargar el Pokémon",
        );
      })
      .finally(() => {
        setLoadingDetail(false);
      });
  }, [namePokemon]);

  return {
    loadingDetail,
    pokemonDetail,
    error,
  };
};

export default useGetPokemonDetail;

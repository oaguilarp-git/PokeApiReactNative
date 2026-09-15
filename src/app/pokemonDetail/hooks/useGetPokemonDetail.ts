import { PokemonDetail } from "@/models/pokemon-detail.models";
import { getDetailService } from "@/services/pokemonService";
import { useEffect, useState } from "react";

const useGetPokemonDetail = (namePokemon: string) => {
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
    null,
  );

  const getPokemonDetail = async () => {
    try {
      setLoadingDetail(true);
      const resp = await getDetailService(namePokemon);
      setPokemonDetail(resp);
    } catch (error: any) {
      setError(
        error instanceof Error ? error.message : "Error al cargar el Pokémon",
      );
    } finally {
      setLoadingDetail(false);
    }
  };

  useEffect(() => {
    void getPokemonDetail();
  }, []);

  return {
    loadingDetail,
    pokemonDetail,
    error,
  };
};

export default useGetPokemonDetail;

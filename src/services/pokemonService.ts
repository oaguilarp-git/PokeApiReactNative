import { PokemonDetail } from "@/models/pokemon-detail.models";
import { ApiResponse } from "@/models/pokemon-list.models";
import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonsService = async (next?: string) => {
  const urlPokemons = next ?? `${URL}?limit=20`;
  try {
    const response = await axios.get<ApiResponse>(urlPokemons);

    if (response.status !== 200)
      throw new Error(" Error al traer los pokemons");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDetailService = async (namePokemon: string) => {
  try {
    const response = await axios.get<PokemonDetail>(`${URL}${namePokemon}`);
    if (response.status !== 200)
      throw new Error(`Error al traer detalle de ${namePokemon}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

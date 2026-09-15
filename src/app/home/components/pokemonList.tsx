import { Pokemon } from "@/models/pokemon-list.models";
import { ActivityIndicator, FlatList } from "react-native";
import PokemonCard from "./pokemonCard";

type Props = {
  loadMorePokemons: () => Promise<void>;
  pokemons: Pokemon[];
  loadingMore: boolean;
};

const getIdPokemon = (url: string): string => {
  const segments = url.split("/");
  return segments[segments.length - 2];
};

const PokemonList = ({ pokemons, loadMorePokemons, loadingMore }: Props) => {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.name}
      numColumns={2}
      renderItem={({ item }) => (
        <PokemonCard pokemonName={item.name} num={getIdPokemon(item.url)} />
      )}
      onEndReached={() => loadMorePokemons()}
      onEndReachedThreshold={0.4}
      ListFooterComponent={loadingMore ? <ActivityIndicator /> : null}
    />
  );
};

export default PokemonList;

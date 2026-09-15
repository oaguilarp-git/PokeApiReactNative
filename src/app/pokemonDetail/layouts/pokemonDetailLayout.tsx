import useGetPokemonDetail from "@/app/pokemonDetail/hooks/useGetPokemonDetail";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import PokemonDetails from "../components/PokemonDetails";
import PokemonIdentity from "../components/PokemonIdentity";
import PokemonImage from "../components/PokemonImage";
import PokemonMoves from "../components/PokemonMoves";
import PokemonStats from "../components/PokemonStats";
import pokemonStyles from "./styles/pokemon.styles";

const Pokemon = () => {
  const { pokemonName } = useLocalSearchParams<{
    pokemonName: string;
  }>();

  const { loadingDetail, pokemonDetail, error } =
    useGetPokemonDetail(pokemonName);

  if (loadingDetail || !pokemonDetail) {
    return (
      <View style={pokemonStyles.loading}>
        <ActivityIndicator size="large" color="#222222" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  const image =
    pokemonDetail.sprites.other?.["official-artwork"]?.front_default ??
    pokemonDetail.sprites.front_default;

  return (
    <ScrollView
      style={pokemonStyles.screen}
      contentContainerStyle={pokemonStyles.content}
    >
      <PokemonImage image={image} />
      <View style={pokemonStyles.infoSection}>
        <PokemonIdentity
          name={pokemonDetail.name}
          types={pokemonDetail.types}
          id={pokemonDetail.id}
        />
        <PokemonDetails
          abilities={pokemonDetail.abilities}
          height={pokemonDetail.height}
          weight={pokemonDetail.weight}
        />
        <PokemonStats stats={pokemonDetail.stats} />
        <PokemonMoves moves={pokemonDetail.moves} />
      </View>
    </ScrollView>
  );
};

export default Pokemon;

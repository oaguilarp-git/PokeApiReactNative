import { ActivityIndicator, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import logoPokemon from "../../../../assets/images/logoPokemon.jpg";
import PokemonList from "../components/pokemonList";
import useGetPokemons from "../hooks/useGetPokemons";
import homeStyles from "./styles/home.styles";

export default function HomeScreen() {
  const { loading, pokemons, loadMorePokemons, loadingMore } = useGetPokemons();

  return (
    <SafeAreaProvider>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView style={homeStyles.container}>
          <Image
            source={logoPokemon}
            style={homeStyles.pokemonLogo}
            resizeMode="contain"
          />
          <PokemonList
            pokemons={pokemons}
            loadMorePokemons={loadMorePokemons}
            loadingMore={loadingMore}
          />
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
}

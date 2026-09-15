import { ActivityIndicator, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/pokemonList";
import useGetPokemons from "../hooks/useGetPokemons";
import homeStyles from "./styles/home.styles";

export default function HomeScreen() {
  const urlLogo: string = "../../../../assets/images/logoPokemon.jpg";
  const { loading, pokemons, loadMorePokemons, loadingMore } = useGetPokemons();

  return (
    <SafeAreaProvider>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView style={homeStyles.container}>
          <Image source={require(urlLogo)} style={homeStyles.pokemonLogo} />
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

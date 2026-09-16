import { router } from "expo-router";
import { Image, Pressable, Text } from "react-native";
import stylesCard, { cardColors } from "./styles/Card.styles";

type Props = {
  pokemonName: string;
  num: string;
};

const urlImages =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/NUM.png";
const pathPokemon = "/pokemonDetail/layouts/pokemonDetailLayout";

const PokemonCard = ({ pokemonName, num }: Props) => {
  const colorIndex = (Number(num) - 1) % cardColors.length;

  return (
    <Pressable
      style={[
        stylesCard.cardContainer,
        { backgroundColor: cardColors[colorIndex] },
      ]}
      onPress={() =>
        router.push({
          pathname: pathPokemon,
          params: { pokemonName },
        })
      }
    >
      <Image
        source={{
          uri: urlImages.replace("NUM", num),
        }}
        style={stylesCard.image}
        resizeMode="contain"
      />

      <Text style={stylesCard.name}>
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </Text>

      <Text style={stylesCard.number}># {num.padStart(3, "0")}</Text>
    </Pressable>
  );
};

export default PokemonCard;

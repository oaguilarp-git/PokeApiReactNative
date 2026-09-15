import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles/PokemonImage.styles";

type Props = { image: string };

const PokemonImage = ({ image }: Props) => (
  <View style={styles.container}>
    <Pressable style={styles.backButton} onPress={() => router.back()}>
      <Text style={styles.backText}>‹</Text>
    </Pressable>
    <Image source={{ uri: image }} style={styles.image} />
  </View>
);

export default PokemonImage;

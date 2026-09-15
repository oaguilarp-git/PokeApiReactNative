import { Ability } from "@/models/pokemon-detail.models";
import { Text, View } from "react-native";
import styles from "./styles/PokemonDetails.styles";

type Props = { abilities: Ability[]; weight: number; height: number };

const PokemonDetails = ({ abilities, weight, height }: Props) => {
  const ability = abilities.find((item) => !item.is_hidden)?.ability?.name;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>PESO</Text>
        <Text style={styles.value}>{(weight / 10).toFixed(1)} kg</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>ALTURA</Text>
        <Text style={styles.value}>{(height / 10).toFixed(1)} m</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>HABILIDAD</Text>
        <Text style={styles.value} numberOfLines={1}>
          {ability ?? "Desconocida"}
        </Text>
      </View>
    </View>
  );
};

export default PokemonDetails;

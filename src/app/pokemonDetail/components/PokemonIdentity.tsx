import { Type } from "@/models/pokemon-detail.models";
import { Text, View } from "react-native";
import styles, { typeColors } from "./styles/PokemonIdentity.styles";

type Props = { name: string; id: number; types: Type[] };

const PokemonIdentity = ({ name, id, types }: Props) => (
  <>
    <View style={styles.titleRow}>
      <Text style={styles.name}>{name.toUpperCase()}</Text>
      <Text style={styles.number}>#{id}</Text>
    </View>
    <View style={styles.typesRow}>
      {types.map(({ type }) => (
        <View
          key={type.name}
          style={[
            styles.typeBadge,
            { backgroundColor: typeColors[type.name] ?? "#D5D5D5" },
          ]}
        >
          <Text style={styles.typeText}>{type.name}</Text>
        </View>
      ))}
    </View>
  </>
);

export default PokemonIdentity;

import { Move } from "@/models/pokemon-detail.models";
import { Text, View } from "react-native";
import styles from "./styles/PokemonMoves.styles";

type Props = { moves: Move[] };

const PokemonMoves = ({ moves }: Props) => (
  <>
    <Text style={styles.title}>Movimientos</Text>
    <View style={styles.container}>
      {moves.slice(0, 6).map(({ move }) => (
        <View key={move.name} style={styles.badge}>
          <Text style={styles.text}>{move.name.replaceAll("-", " ")}</Text>
        </View>
      ))}
    </View>
  </>
);

export default PokemonMoves;

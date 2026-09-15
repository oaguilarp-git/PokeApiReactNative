import { Stat } from "@/models/pokemon-detail.models";
import { Text, View } from "react-native";
import styles from "./styles/PokemonStats.styles";

type Props = {
  stats: Stat[];
};

const PokemonStats = ({ stats }: Props) => {
  return (
    <>
      <Text style={styles.title}>Estadísticas</Text>

      <View style={styles.container}>
        {stats.map(({ stat, base_stat }) => (
          <View key={stat.name} style={styles.statRow}>
            <Text style={styles.statName}>{stat.name.replace("-", " ")}</Text>

            <View style={styles.progressBackground}>
              <View
                style={[
                  styles.progress,
                  { width: `${Math.min(base_stat, 100)}%` },
                ]}
              />
            </View>

            <Text style={styles.statValue}>{base_stat}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default PokemonStats;

import { StyleSheet } from "react-native";

const pokemonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 32,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoSection: {
    paddingHorizontal: 26,
    paddingTop: 34,
  },
});

export default pokemonStyles;

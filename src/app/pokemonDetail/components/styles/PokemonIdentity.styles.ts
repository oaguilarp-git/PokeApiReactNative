import { StyleSheet } from "react-native";

export const typeColors: Record<string, string> = {
  grass: "#9BE47D",
  poison: "#BD78D0",
  fire: "#FF8125",
  water: "#75B8F4",
  electric: "#F5D84A",
  bug: "#B7D94C",
  flying: "#A9DFF1",
  psychic: "#ED68A7",
  ice: "#B7F1EE",
  rock: "#C5A77C",
  ground: "#D7B36A",
  ghost: "#9575CD",
  dragon: "#8B7BE8",
  dark: "#756B73",
  steel: "#AAB8C7",
  fairy: "#F2A8D2",
  fighting: "#D96D55",
  normal: "#C7C7C7",
};

export default StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: { color: "#202020", fontSize: 24, fontWeight: "800" },
  number: { color: "#8E8E8E", fontSize: 16, fontWeight: "700" },
  typesRow: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 14 },
  typeBadge: {
    minWidth: 76,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  typeText: { color: "#202020", fontSize: 15, fontWeight: "500" },
});

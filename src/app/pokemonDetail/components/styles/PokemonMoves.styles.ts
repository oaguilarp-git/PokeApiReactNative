import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: { color: "#333333", fontSize: 18, fontWeight: "600", marginTop: 34 },
  container: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 16 },
  badge: {
    backgroundColor: "#EEF1F4",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  text: { color: "#333333", fontSize: 14, textTransform: "capitalize" },
});

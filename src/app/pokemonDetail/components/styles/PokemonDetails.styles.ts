import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingVertical: 18,
    marginTop: 28,
  },
  item: { flex: 1, paddingHorizontal: 4 },
  label: { color: "#777777", fontSize: 12, fontWeight: "600", marginBottom: 8 },
  value: { color: "#222222", fontSize: 18, fontWeight: "500" },
});

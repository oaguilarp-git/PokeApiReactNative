import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 34,
  },
  container: {
    gap: 14,
    marginTop: 16,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  statName: {
    width: 92,
    color: "#555555",
    fontSize: 13,
    textTransform: "capitalize",
  },
  progressBackground: {
    flex: 1,
    height: 8,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  progress: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#8BCFAF",
  },
  statValue: {
    width: 32,
    color: "#222222",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
  },
});

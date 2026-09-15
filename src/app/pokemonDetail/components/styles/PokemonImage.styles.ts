import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 440,
    backgroundColor: "#DDF5EF",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 24,
    left: 24,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 42,
    lineHeight: 42,
    fontWeight: "300",
  },
  image: { width: "88%", height: "88%", resizeMode: "contain" },
});

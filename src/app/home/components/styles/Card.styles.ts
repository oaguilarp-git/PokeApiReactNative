import { StyleSheet } from "react-native";

export const cardColors = [
  "#C8E8D9",
  "#F5D5B7",
  "#F2B9B5",
  "#C4E2E5",
  "#D8C8F0",
  "#F3E6A8",
  "#C7D8F2",
];

const stylesCard = StyleSheet.create({
  cardContainer: {
    width: "42%",
    aspectRatio: 0.82,
    margin: 10,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "90%",
    height: "68%",
    resizeMode: "contain",
  },
  name: {
    color: "#17213D",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 6,
    textAlign: "center",
  },
  number: {
    color: "#46516D",
    fontSize: 13,
    marginTop: 3,
  },
});

export default stylesCard;

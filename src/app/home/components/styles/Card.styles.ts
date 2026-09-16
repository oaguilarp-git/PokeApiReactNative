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
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    elevation: 5,
  },
  image: {
    width: "90%",
    height: "68%",
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

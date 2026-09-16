import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import PokemonCard from "../../../../src/app/home/components/pokemonCard";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

describe("PokemonCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the formatted Pokemon name and number", async () => {
    const { getByText } = await render(
      <PokemonCard pokemonName="pikachu" num="25" />,
    );

    expect(getByText("Pikachu")).toBeTruthy();
    expect(getByText("# 025")).toBeTruthy();
  });

  it("navigates to the Pokemon detail screen when pressed", async () => {
    const { getByText } = await render(
      <PokemonCard pokemonName="pikachu" num="25" />,
    );

    fireEvent.press(getByText("Pikachu"));

    expect(router.push).toHaveBeenCalledWith({
      pathname: "/pokemonDetail/layouts/pokemonDetailLayout",
      params: { pokemonName: "pikachu" },
    });
  });
});

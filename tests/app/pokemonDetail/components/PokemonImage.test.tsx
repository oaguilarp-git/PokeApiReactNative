import { jest } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import PokemonImage from "../../../../src/app/pokemonDetail/components/PokemonImage";

jest.mock("expo-router", () => ({
  router: {
    back: jest.fn(),
  },
}));

describe("PokemonImage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Pokemon image", async () => {
    const { toJSON } = await render(
      <PokemonImage image="https://example.com/pikachu.png" />,
    );

    expect(JSON.stringify(toJSON())).toContain(
      "https://example.com/pikachu.png",
    );
  });

  it("goes back when the back button is pressed", async () => {
    const { getByText } = await render(
      <PokemonImage image="https://example.com/pikachu.png" />,
    );

    fireEvent.press(getByText("‹"));

    expect(router.back).toHaveBeenCalledTimes(1);
  });
});

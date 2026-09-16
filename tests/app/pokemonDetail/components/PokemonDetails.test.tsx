import { render } from "@testing-library/react-native";
import PokemonDetails from "../../../../src/app/pokemonDetail/components/PokemonDetails";

describe("PokemonDetails", () => {
  it("renders the converted weight, height, and visible ability", async () => {
    const { getByText } = await render(
      <PokemonDetails
        abilities={[
          {
            is_hidden: true,
            slot: 3,
            ability: { name: "limber", url: "" },
          },
          {
            is_hidden: false,
            slot: 1,
            ability: { name: "static", url: "" },
          },
        ]}
        weight={60}
        height={4}
      />,
    );

    expect(getByText("6.0 kg")).toBeTruthy();
    expect(getByText("0.4 m")).toBeTruthy();
    expect(getByText("static")).toBeTruthy();
  });

  it("shows a fallback when there is no visible ability", async () => {
    const { getByText } = await render(
      <PokemonDetails
        abilities={[{ is_hidden: true, slot: 1, ability: null }]}
        weight={60}
        height={4}
      />,
    );

    expect(getByText("Desconocida")).toBeTruthy();
  });
});

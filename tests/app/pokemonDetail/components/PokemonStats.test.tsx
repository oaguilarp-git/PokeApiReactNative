import { render } from "@testing-library/react-native";
import PokemonStats from "../../../../src/app/pokemonDetail/components/PokemonStats";

describe("PokemonStats", () => {
  it("renders stat names and values", async () => {
    const { getByText } = await render(
      <PokemonStats
        stats={[
          {
            base_stat: 120,
            effort: 0,
            stat: { name: "special-attack", url: "" },
          },
          {
            base_stat: 45,
            effort: 0,
            stat: { name: "speed", url: "" },
          },
        ]}
      />,
    );

    expect(getByText("Estadísticas")).toBeTruthy();
    expect(getByText("special attack")).toBeTruthy();
    expect(getByText("120")).toBeTruthy();
    expect(getByText("speed")).toBeTruthy();
    expect(getByText("45")).toBeTruthy();
  });
});

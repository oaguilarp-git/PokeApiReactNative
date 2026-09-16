import { render } from "@testing-library/react-native";
import PokemonMoves from "../../../../src/app/pokemonDetail/components/PokemonMoves";

describe("PokemonMoves", () => {
  it("renders only the first six moves and formats their names", async () => {
    const moves = Array.from({ length: 7 }, (_, index) => ({
      move: { name: `move-${index + 1}`, url: "" },
      version_group_details: [],
    }));

    const { getByText, queryByText } = await render(
      <PokemonMoves moves={moves} />,
    );

    expect(getByText("Movimientos")).toBeTruthy();
    expect(getByText("move 1")).toBeTruthy();
    expect(getByText("move 6")).toBeTruthy();
    expect(queryByText("move 7")).toBeNull();
  });
});

import { render } from "@testing-library/react-native";
import PokemonIdentity from "../../../../src/app/pokemonDetail/components/PokemonIdentity";

describe("PokemonIdentity", () => {
  it("renders the uppercase name, id, and types", async () => {
    const { getByText } = await render(
      <PokemonIdentity
        name="pikachu"
        id={25}
        types={[
          { slot: 1, type: { name: "electric", url: "" } },
          { slot: 2, type: { name: "unknown", url: "" } },
        ]}
      />,
    );

    expect(getByText("PIKACHU")).toBeTruthy();
    expect(getByText("#25")).toBeTruthy();
    expect(getByText("electric")).toBeTruthy();
    expect(getByText("unknown")).toBeTruthy();
  });
});

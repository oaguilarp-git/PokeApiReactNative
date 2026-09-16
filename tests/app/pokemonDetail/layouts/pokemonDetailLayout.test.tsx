import { jest } from "@jest/globals";
import { render } from "@testing-library/react-native";
import { useLocalSearchParams } from "expo-router";
import useGetPokemonDetail from "../../../../src/app/pokemonDetail/hooks/useGetPokemonDetail";
import Pokemon from "../../../../src/app/pokemonDetail/layouts/pokemonDetailLayout";
import { PokemonDetail } from "../../../../src/models/pokemon-detail.models";

jest.mock("expo-router", () => ({
  useLocalSearchParams: jest.fn(),
  router: {
    back: jest.fn(),
  },
}));

jest.mock(
  "../../../../src/app/pokemonDetail/hooks/useGetPokemonDetail",
  () => ({
    __esModule: true,
    default: jest.fn(),
  }),
);

const mockedUseLocalSearchParams = jest.mocked(useLocalSearchParams);
const mockedUseGetPokemonDetail = jest.mocked(useGetPokemonDetail);

const pokemonDetail = {
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  abilities: [
    {
      is_hidden: false,
      slot: 1,
      ability: { name: "static", url: "" },
    },
  ],
  types: [{ slot: 1, type: { name: "electric", url: "" } }],
  stats: [{ base_stat: 90, effort: 0, stat: { name: "speed", url: "" } }],
  moves: [
    {
      move: { name: "quick-attack", url: "" },
      version_group_details: [],
    },
  ],
  sprites: {
    front_default: "https://example.com/pikachu.png",
    other: {
      "official-artwork": {
        front_default: "https://example.com/pikachu-art.png",
        front_shiny: "",
      },
    },
  },
} as PokemonDetail;

describe("Pokemon detail layout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseLocalSearchParams.mockReturnValue({ pokemonName: "pikachu" });
  });

  it("shows a loading indicator while the detail is loading", async () => {
    mockedUseGetPokemonDetail.mockReturnValue({
      loadingDetail: true,
      pokemonDetail: null,
      error: "",
    });

    const { toJSON } = await render(<Pokemon />);

    expect(JSON.stringify(toJSON())).toContain('"type":"ActivityIndicator"');
  });

  it("shows the error returned by the detail hook", async () => {
    mockedUseGetPokemonDetail.mockReturnValue({
      loadingDetail: false,
      pokemonDetail,
      error: "No encontrado",
    });

    const { getByText } = await render(<Pokemon />);

    expect(getByText("No encontrado")).toBeTruthy();
  });

  it("renders the Pokemon detail when data is available", async () => {
    mockedUseGetPokemonDetail.mockReturnValue({
      loadingDetail: false,
      pokemonDetail,
      error: "",
    });

    const { getByText } = await render(<Pokemon />);

    expect(getByText("PIKACHU")).toBeTruthy();
    expect(getByText("electric")).toBeTruthy();
    expect(getByText("quick attack")).toBeTruthy();
    expect(mockedUseGetPokemonDetail).toHaveBeenCalledWith("pikachu");
  });
});

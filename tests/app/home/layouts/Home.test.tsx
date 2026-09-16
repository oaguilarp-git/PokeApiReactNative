import { render } from "@testing-library/react-native";
import useGetPokemons from "../../../../src/app/home/hooks/useGetPokemons";
import HomeScreen from "../../../../src/app/home/layouts/Home";

jest.mock("../../../../src/app/home/hooks/useGetPokemons", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../../../../src/app/home/components/pokemonList", () => ({
  __esModule: true,
  default: () => {
    const { Text } =
      jest.requireActual<typeof import("react-native")>("react-native");

    return <Text testID="pokemon-list">Pokemon list</Text>;
  },
}));

jest.mock("react-native-safe-area-context", () => {
  const { View } =
    jest.requireActual<typeof import("react-native")>("react-native");

  return {
    SafeAreaProvider: View,
    SafeAreaView: View,
  };
});

const mockedUseGetPokemons = jest.mocked(useGetPokemons);

describe("HomeScreen", () => {
  it("shows a loading indicator while Pokemon are loading", async () => {
    mockedUseGetPokemons.mockReturnValue({
      loading: true,
      pokemons: [],
      loadMorePokemons: jest.fn(),
      loadingMore: false,
    });

    const { queryByTestId, toJSON } = await render(<HomeScreen />);

    expect(JSON.stringify(toJSON())).toContain('"type":"ActivityIndicator"');
    expect(queryByTestId("pokemon-list")).toBeNull();
  });

  it("shows the logo and list after loading", async () => {
    mockedUseGetPokemons.mockReturnValue({
      loading: false,
      pokemons: [],
      loadMorePokemons: jest.fn(),
      loadingMore: false,
    });

    const { getByTestId, toJSON } = await render(<HomeScreen />);

    expect(getByTestId("pokemon-list")).toBeTruthy();
    expect(JSON.stringify(toJSON())).toContain('"type":"Image"');
  });
});

import { renderHook } from "@testing-library/react-native";
import useGetPokemons from "../../../../src/app/home/hooks/useGetPokemons";
import { usePokemonStore } from "../../../../src/store/usePokemonStore";

jest.mock("../../../../src/store/usePokemonStore", () => ({
  usePokemonStore: jest.fn(),
}));

const mockedUsePokemonStore = jest.mocked(usePokemonStore);

describe("useGetPokemons", () => {
  it("reads Pokemon state and loads the first page on mount", async () => {
    const getPokemons = jest.fn();
    const loadMorePokemons = jest.fn();
    const state = {
      pokemons: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
      ],
      loading: false,
      loadingMore: false,
      getPokemons,
      loadMorePokemons,
    };

    mockedUsePokemonStore.mockImplementation((selector) => selector(state));

    const { result } = await renderHook(() => useGetPokemons());

    expect(result.current).toEqual({
      loading: false,
      pokemons: state.pokemons,
      loadMorePokemons,
      loadingMore: false,
    });
    expect(getPokemons).toHaveBeenCalledTimes(1);
  });
});

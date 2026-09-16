import { jest } from "@jest/globals";
import { renderHook, waitFor } from "@testing-library/react-native";
import useGetPokemonDetail from "../../../../src/app/pokemonDetail/hooks/useGetPokemonDetail";
import { getDetailService } from "../../../../src/services/pokemonService";

jest.mock("../../../../src/services/pokemonService", () => ({
  getDetailService: jest.fn(),
}));

const mockedGetDetailService = jest.mocked(getDetailService);

describe("useGetPokemonDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("loads the Pokemon detail successfully", async () => {
    const pokemonDetail = {
      id: 25,
      name: "pikachu",
    } as Awaited<ReturnType<typeof getDetailService>>;

    mockedGetDetailService.mockResolvedValue(pokemonDetail);

    const { result } = await renderHook(() => useGetPokemonDetail("pikachu"));

    await waitFor(() => {
      expect(result.current.pokemonDetail).toBe(pokemonDetail);
      expect(result.current.loadingDetail).toBe(false);
    });

    expect(result.current.error).toBe("");
    expect(mockedGetDetailService).toHaveBeenCalledWith("pikachu");
  });

  it("exposes the service error", async () => {
    mockedGetDetailService.mockRejectedValue(new Error("No encontrado"));

    const { result } = await renderHook(() => useGetPokemonDetail("missingno"));

    await waitFor(() => {
      expect(result.current.error).toBe("No encontrado");
      expect(result.current.loadingDetail).toBe(false);
    });
  });
});

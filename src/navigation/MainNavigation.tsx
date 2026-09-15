import { Stack } from "expo-router";

export default function MainNavigation() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="pokemonDetail" options={{ title: "Pokemon" }} />
    </Stack>
  );
}

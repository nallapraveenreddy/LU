import { Stack } from "expo-router";
import { tabs } from "./tabs";
export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="{tabs}" />
    </Stack>
  );
}

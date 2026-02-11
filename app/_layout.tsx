import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

//! So this layout is like common elements that we have displaying like headers
//? Basically shared UI elements on this page

//! Every file inside app directory is either a layout file or a route file

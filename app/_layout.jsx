import { Stack } from "expo-router";
import { tabs } from "./tabs";
import { useFonts } from "expo-font";
import {ClerkProvider,SignedIn,SignedOut} from "@client/clerk-expo";
export default function RootLayout() {
  useFonts({
    'lato': require('.//../assets/fonts/Lato-regular.ttf')
    'lato-bold': require('./../assets/fonts/')
  })
  return(
    <ClerkProvider publishablekey = {publishablekey}>
    <SignedIn>
    <Stack ></Stack>
    </SignedIn>
    </ClerkProvider>
  )
}

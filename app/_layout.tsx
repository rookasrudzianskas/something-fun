import {Stack} from "expo-router";
import {PaperProvider} from "react-native-paper";

export default function RootLayout() {
    return (
      <PaperProvider>
        <Stack>
          <Stack.Screen name="index" options={{title: "Find Doctors"}} />
          <Stack.Screen name="search" options={{title: "Search Doctors"}} />
        </Stack>
      </PaperProvider>
    )
}

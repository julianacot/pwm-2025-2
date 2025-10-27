import { Appbar } from "react-native-paper";  // Importando o Appbar para o cabeçalho
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Appbar.Header>
        <Appbar.Content title="Meu App" subtitle="Com React Native Paper" />
      </Appbar.Header>
      <Stack />
    </QueryClientProvider>
  );
}

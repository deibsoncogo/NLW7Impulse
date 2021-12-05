/* eslint-disable camelcase */
import React from "react"; // importa um framework
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"; // dependência para lidar com fontes
import AppLoading from "expo-app-loading"; // dependência para lidar com o carregamento da aplicação
import { StatusBar } from "expo-status-bar"; // dependência para lidar com barra de cima do celular
import { AuthProvider } from "./src/hooks/authHooks";
import { Home } from "./src/screens/home";

// função que será o coração da aplicação unindo todas as páginas
export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold }); // utilizando as fontes

  if (!fontLoaded) { // verifica se as fontes já foram carregadas
    return <AppLoading />; // faz a aplicação entrar em modo de carregamento
  }

  return ( // retorna algo ao chamador
    <AuthProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
    </AuthProvider>
  );
}

/** comentários dos comandos dentro da estrutura tsx
 * AuthProvider define qual parte da aplicação vai ter acesso a este contexto
 * StatusBar configura a barra de cima do celular
 * Home importação do componente
 */

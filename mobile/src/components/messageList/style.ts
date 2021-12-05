import { StyleSheet } from "react-native"; // importação para lidar com estilização

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  container: {
    flex: 1, // define a ocupação da tela
    paddingHorizontal: 20, // define um espaçamento externo nos lados
  },

  content: {
    paddingTop: 10, // define um espaçamento externo em cima
    paddingBottom: 10, // define um espaçamento externo em baixo
  },
});

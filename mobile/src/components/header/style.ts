import { StyleSheet } from "react-native"; // importação para lidar com estilização
import { color, font } from "../../theme";

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  container: {
    width: "100%", // define a largura
    flexDirection: "row", // define a orientação do alinhamento
    justifyContent: "space-between", // define o alinhamento do conteúdo
    alignItems: "center", // define o alinhamento dos itens dentro do conteúdo
    paddingHorizontal: 20, // define um espaçamento externo nos lados
  },

  logoutButton: {
    flexDirection: "row", // define a orientação do alinhamento
    alignItems: "center", // define o alinhamento dos itens dentro do conteúdo
  },

  logoutText: {
    marginRight: 20, // define um espaçamento externo no lado direito
    fontSize: 15, // define o tamanho da fonte
    fontFamily: font.regular, // define o estilo da fonte
    color: color.white, // define uma cor
  },
});

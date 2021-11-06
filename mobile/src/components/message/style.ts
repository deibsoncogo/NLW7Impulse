import { StyleSheet } from "react-native"; // importação para lidar com estilização
import { color, font } from "../../theme";

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  container: {
    width: "100%", // define a largura
    marginBottom: 36, // define uma margem interna
  },

  message: {
    fontSize: 15, // define o tamanho da fonte
    fontFamily: font.regular, // define o estilo da fonte
    color: color.white, // define uma cor
    lineHeight: 20, // define a altura da linha
    marginBottom: 12, // define uma margem interna
  },

  footer: {
    width: "100%", // define a largura
    flexDirection: "row", // define a orientação do alinhamento // define a orientação do alinhamento
    alignItems: "center", // define o alinhamento dos itens dentro do conteudo
  },

  userName: {
    fontSize: 15, // define o tamanho da fonte
    fontFamily: font.regular, // define o estilo da fonte
    color: color.white, // define uma cor
    marginLeft: 16, // define um espaçamento interno no lado esquerdo
  },
});

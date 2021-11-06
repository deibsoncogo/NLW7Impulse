import { StyleSheet } from "react-native"; // importação para lidar com estilização
import { font } from "../../theme";

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  button: {
    height: 48, // define a altura
    width: "100%", // define a largura
    flexDirection: "row", // define a orientação do alinhamento
    justifyContent: "center", // define o alinhamento do conteudo
    alignItems: "center", // define o alinhamento dos itens dentro do conteudo
  },

  title: {
    fontSize: 14, // define o tamanho da fonte
    fontFamily: font.bold, // define o estilo da fonte
  },

  icon: { marginRight: 12 /* define um espaçamento interno no lado direito */ },
});

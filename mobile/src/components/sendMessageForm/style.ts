import { StyleSheet } from "react-native"; // importação para lidar com estilização
import { getBottomSpace } from "react-native-iphone-x-helper"; // dependência para lidar formatações especiais do Iphone
import { color } from "../../theme";

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  container: {
    height: 184, // define a altura
    width: "100%", // define a largura
    paddingBottom: getBottomSpace() + 16, // define um espaçamento esterno
    paddingTop: 16, // define um espaçamento externo em cima
    paddingHorizontal: 24, // define um espaçamento externo nos lados
    backgroundColor: color.blackTertiary, // define a cor de fundo
  },

  input: {
    height: 88, // define a altura
    width: "100%", // define a largura
    textAlignVertical: "top", // define o alinhamento do texto
    color: color.white, // define uma cor
  },
});

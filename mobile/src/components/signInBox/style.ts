import { StyleSheet } from "react-native"; // importação para lidar com estilização
import { getBottomSpace } from "react-native-iphone-x-helper"; // dependencia para lidar formatações especiais do Iphone

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  container: {
    height: 48, // define a altura
    justifyContent: "center", // define o alinhamento do conteudo
    alignItems: "center", // define o alinhamento dos itens dentro do conteudo
    paddingHorizontal: 20, // define um espaçamento externo nos lados
    paddingBottom: getBottomSpace() + 32, // define um espaçamento esterno
  },
});

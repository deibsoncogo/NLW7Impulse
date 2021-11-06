import { StyleSheet } from "react-native"; // importação para lidar com estilização
import { getStatusBarHeight } from "react-native-iphone-x-helper"; // dependência para lidar espaçamentos
import { color } from "../../theme";

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  container: {
    flex: 1, // define a ocupação do item na tela
    backgroundColor: color.blackSecondary, // define uma cor de função
    paddingTop: getStatusBarHeight() + 17, // define um espaçamento interno
  },
});

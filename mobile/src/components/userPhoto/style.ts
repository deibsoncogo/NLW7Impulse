import { StyleSheet } from "react-native"; // importação para lidar com estilização
import { color } from "../../theme";

// variável que vai conter as estilizações
export const style = StyleSheet.create({
  container: {
    justifyContent: "center", // define o alinhamento do conteúdo
    alignItems: "center", // define o alinhamento dos itens dentro do conteúdo
  },

  avatar: {
    borderWidth: 2, // define o tamanho da borda
    borderColor: color.blackSecondary, // define a cor da borda
  },
});

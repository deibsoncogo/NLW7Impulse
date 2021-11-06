import React from "react"; // importação do framework
import { TouchableOpacity, TouchableOpacityProps, Text, ColorValue, ActivityIndicator } from "react-native"; // importação do framework
import { AntDesign } from "@expo/vector-icons"; // dependência que vai lidar com os icones
import { style } from "./style";

type IProps = TouchableOpacityProps & { // tipagem do botão
  title: string; // define o tipo de dados como texto
  color: ColorValue; // define o tipo do dados como um código de uma cor
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>["name"]; // truque para tornar dinâmico o tipo do icone
  isLoading?: boolean;
}

// função que servirá como um componente de botão
export function Button({ title, color, backgroundColor, icon, isLoading = false, ...rest }: IProps) {
  return ( // retorna algo ao chamador
    <>
      <TouchableOpacity
        style={[style.button, { backgroundColor }]}
        activeOpacity={0.7}
        disabled={isLoading}
        {...rest}
      >
        { isLoading
          ? <ActivityIndicator color={color} />
          : (
            <>
              <AntDesign name={icon} size={24} style={style.icon} />
              <Text style={[style.title, { color }]}>{title}</Text>
            </>
          )}
      </TouchableOpacity>
    </>
  );
}

/** comentário dos comandos dentro da estrutura tsx
 * TouchableOpacity cria um botão
 * style={[estilizacaoImportada, { estilizacaoLocal }]} cria um grupo de estilização
 * activeOpacity={...} ajusta a opacidade de ativação do botão
 * disabled={boolean} define se o botão deve ficar desativado
 * {...rest} recebe as demais propriedades não definido
 * { boolean ? true : false } cria um if ternário
 * ActivityIndicator cria um icone de carregamento dentro do botão
 * AntDesign cria um icone de forma dinâmica
 * Text cria um texto de forma dinâmica
 */

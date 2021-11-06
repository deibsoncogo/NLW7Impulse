import React from "react"; // importa um framework
import { View } from "react-native"; // importa um framework
import { UseAuth } from "../../hooks/auth";
import { color } from "../../theme";
import { Button } from "../button";
import { style } from "./style";

// função que servira como o componente de login do usuário
export function SignInBox() {
  const { SignIn, isSigningIn } = UseAuth(); // usando o conceito de contexto

  return ( // retorna algo ao chamador
    <View style={style.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={color.blackPrimary}
        backgroundColor={color.yellow}
        icon="github"
        onPress={SignIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}

/** comentários dos comandos dentro de estrutura tsx
 * View cria um grupo de conteudo
 * Button permite utilizar o componente criado
 * title permite utilizar a propriedade criada para definir um texto
 * color define uma cor
 * backgroundColor define uma cor de fundo
 * icon permite utilizar a propriedade criada para definir o icone
 * onPress define oque executar quando o botão for pressionado
 * isLoading permite utilizar a propriedade que criamos
 */

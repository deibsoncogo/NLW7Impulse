import React from "react"; // importação do framework
import { Text, View } from "react-native"; // importação do framework
import { MotiView } from "moti"; // dependência para criar animações
import { UserPhoto } from "../userPhoto";
import { style } from "./style";

export type IMessage = { // tipagem da mensagem
  id: string;
  text: string;
  user: {
    name: string;
    avatarUrl: string;
  }
}

type IProps = { // tipagem do recebimento de informação
  data: IMessage;
}

// função que servira como o componente de mensagem
export function Message({ data }: IProps) {
  return ( // retorna algo ao chamador
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
      style={style.container}
    >
      <Text style={style.message}>{data.text}</Text>

      <View style={style.footer}>
        <UserPhoto imageUri={data.user.avatarUrl} size="small" />

        <Text style={style.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}

/** comentário dos comandos dentro da estrutura tsx
 * MotiView permite criar animações
 * from define onde o conteúdo deve iniciar
 * animate define para onde o conteúdo deve ir
 * transition define o tipo do efeito e sua duração
 * style importa uma estilização esterna
 * Text cria um texto
 * View cria um grupo de conteúdo
 * UserPhoto está importando um componente
 * imageUri busca uma imagem a partir de uma URL
 * size é uma propriedade cria por nos qu define o tamanho da imagem
 */

import React, { useState } from "react"; // importa um framework
import { Alert, Keyboard, TextInput, View } from "react-native"; // importa um framework
import { api } from "../../services/api";
import { color } from "../../theme";
import { Button } from "../button";
import { style } from "./style";

// função que servira como o componente para enviar um mensagem
export function SendMessageForm() {
  const [message, setMessage] = useState(""); // usando o conceito de imutabilidade
  const [sendingMessage, setSendingMessage] = useState(false); // usando o conceito de imutabilidade

  // função que vai enviar salvar a mensagem nova
  async function HandleMessageSubmit() {
    const messageFormatted = message.trim(); // remove os espaço no começo e no final

    if (messageFormatted.length > 0) { // verifica se existe algo salvo
      setSendingMessage(true); // avisa a aplicação que o processo de envio de uma mensagem está em andamento
      await api.post("/message", { message: messageFormatted }); // chama esta rota para salvar a mensagem

      setMessage(""); // apaga a mensagem digitado no campo
      Keyboard.dismiss(); // fecha o teclado
      setSendingMessage(false); // avisa que o processo de envio de uma mensagem está finalizado
      Alert.alert("Mensagem enviada com sucesso"); // envia uma mensagem nativamente
    } else {
      Alert.alert("Escreva a mensagem para enviar"); // envia uma mensagem nativamente
    }
  }

  return ( // retorna algo ao chamador
    <View style={style.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento"
        placeholderTextColor={color.grayPrimary}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={style.input}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={color.pink}
        color={color.white}
        isLoading={sendingMessage}
        onPress={HandleMessageSubmit}
      />
    </View>
  );
}

/** comentários dos comandos dentro da estrutura tsx
 * View cria um grupo de conteudo
 * style aplica um estilização
 * TextInput cria um campo de digitação
 * keyboardAppearance define um tema do input
 * placeholder define uma mensagem de sobreposição do input
 * placeholderTextColor define a cor do texto sobreposto do input
 * multiline permite ter quebra de linha
 * maxLength define a quantidade máxima de caracteres
 * onChangeText executa algo o conteudo do input for alterado
 * value define o valor do input
 * editable define de o input pode ser alterado
 * Button permite a utilização do componente criado
 * title permite utilizar a propriedade criada por nos
 * backgroundColor define a cor de fundo
 * color define uma cor
 * isLoading permite utilizar a propriedade que criamos
 * onPress executa algo quando o item for executado
 */

import React from "react"; // importa um framework
import { View, KeyboardAvoidingView, Platform } from "react-native"; // importa um framework
import { Header } from "../../components/header";
import { MessageList } from "../../components/messageList";
import { SendMessageForm } from "../../components/sendMessageForm";
import { SignInBox } from "../../components/signInBox";
import { UseAuth } from "../../hooks/auth";
import { style } from "./style";

// função que servirá como a página home
export function Home() {
  const { user } = UseAuth(); // utilizando o conceito de contexto

  return ( // retornar algo ao chamador
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={style.container}>
        <Header />
        <MessageList />

        {user ? <SendMessageForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  );
}

/** comentários dos comandos dentro da estrutura tsx
 * KeyboardAvoidingView serve para dar tratativa ao teclado
 * style serve para aplicar um estilização
 * behavior uma configuração para o teclado
 * View cria um grupo de comandos
 * Header importação de um componente
 * MessageList importação de um componente
 * SendMessageForm importação de um componente
 * SignInBox importação de um componente
 */

import React, { useState, useEffect } from "react"; // importação de um framework
import { ScrollView } from "react-native"; // importação de um framework
import { io } from "socket.io-client"; // dependência que vai lidar com o monitoramento de conexões do cliente
import { api } from "../../services/api";
import { Message, IMessage } from "../message";
import { style } from "./style";

const messageQueue: IMessage[] = []; // cria uma variável que será um banco de dados volátil e tipado

const socket = io(String(api.defaults.baseURL)); // cria a conexão da dependência com a aplicação

// vai executar um grupo de comandos quando este evento for encontrado
socket.on("newMessage", (newMessage) => {
  messageQueue.push(newMessage); // insere a nova mensagem no DB volátil
});

// função que servira como o componente para listar as mensagens
export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<IMessage[]>([]); // usando o conceito de imutabilidade

  useEffect(() => { // vai executar algo sempre que este arquivo for iniciado
    async function FetchMessage() { // cria uma função assincrona
      const messageResponse = await api.get<IMessage[]>("/message/last"); // executa esta rota no backend
      setCurrentMessages(messageResponse.data); // salva o retorno no DB volátil
    }

    FetchMessage(); // chama a função
  }, []);

  useEffect(() => { // vai executar algo sempre que este arquivo for iniciado
    const timer = setInterval(() => { // define algo que deve ser executado dentro de intervalo de tempo
      if (messageQueue.length > 0) { // se existir novas mensagens vai jogar na tela
        setCurrentMessages((prevState) => [messageQueue[0], prevState[0], prevState[1]]); // adiciona a nova mensagem a tela
        messageQueue.shift(); // remove a mensagem já exibida na tela
      }
    }, 3000); // define o intervalo de execução

    return () => clearInterval(timer); // vai resetar o tempo corrido
  }, []);

  return ( // retorna algo ao chamador
    <ScrollView
      contentContainerStyle={style.content}
      keyboardShouldPersistTaps="never"
      style={style.container}
    >
      {currentMessages.map((message) => <Message key={message.id} data={message} />)}
    </ScrollView>
  );
}

/** comentário dos comandos dentro da estrutura tsx
 * ScrollView cria uma lista de rolagem
 * contentContainerStyle importa um estilização esterna
 * keyboardShouldPersistTaps define se o teclado pode ser ativado com o item é selecionado
 * style importa uma estilização esterna
 * map serve para percorrer um grupo de informação dando uma tratativa individualmente
 */

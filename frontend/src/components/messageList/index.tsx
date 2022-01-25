import { useEffect, useState } from "react"; // framework que vai lidar com diversas coisas importante
import logoImg from "../../assets/logo.svg";
import { api, socket } from "../../services/backend";
import style from "./style.module.scss";

type IMessage = { // tipagem da mensagem
  id: string;
  text: string;
  user: {
    name: string;
    avatarUrl: string;
  }
}

// banco de dados volátil tipado para receber temporariamente as novas mensagens
const messageQueue: IMessage[] = [];

// define um grupo de comando para ser executado quando este evento for encontrado
socket.on("newMessage", (newMessage) => {
  messageQueue.push(newMessage); // insere a nova mensagem no banco de dados volátil
});

// função que vai servir para mostrar as mensagens salva
export function MessageList() {
  const [messageAll, setMessageAll] = useState<IMessage[]>([]); // conceito de imutabilidade para uma mensagem

  useEffect(() => { // serve executar um grupo de comandos quando a página for carrega
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const timer = setInterval(() => { // serve para executar um grupo de comando num intervalo de tempo
      if (messageQueue.length > 0) { // se existir um mensagem vai executar estes comandos
        setMessageAll((prevState) => [
          messageQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean));

        messageQueue.shift(); // remove a primeira mensagem
      }
    }, 3000);
  }, []);

  useEffect(() => { // serve executar um grupo de comandos quando a página for carrega
    api.get<IMessage[]>("message").then((response) => { // executa o servidor trazendo as mensagens
      setMessageAll(response.data); // salva as mensagens no banco de dados volátil
    });
  }, []);

  return (
    <div className={style.messageListWrapper}>
      <img src={logoImg} alt="Logo da DoWhile 2021" />

      <ul className={style.messageList}>
        {messageAll.map((message) => (
          <li className={style.message} key={message.id}>
            <p className={style.messageContent}>{message.text}</p>

            <div className={style.messageUser}>
              <div className={style.userImage}>
                <img src={message.user.avatarUrl} alt="Foto de perfil" />
              </div>

              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ); // retornar algo criando o conteúdo na página
}

/** anotações
 * div: serve para agrupar os comandos
 * img: insere uma imagem
 * ul: serve para cria uma lista
 * li: cria uma linha para a lista
 * p: serve para inserir um texto
 * span: serve para inserir um texto com menos destaque
 * map: serve para listar um grupo de dados dando uma tratativa individualmente
 */

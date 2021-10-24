import { useContext } from "react"; // framework que vai lidar com diversas coisas importante
import { LoginBox } from "./components/loginBox";
import { MessageList } from "./components/messageList";
import { SendMessageForm } from "./components/sendMessageForm";
import { AuthContext } from "./contexts/auth";
import style from "./app.module.scss";

// função que vai ser a nossa aplicação
export function App() {
  const { user } = useContext(AuthContext); // permite a utilização do metodo de contexto

  return (
    <main className={`${style.contentWrapper} ${user ? style.contentSigned : ""}`}>
      <MessageList />
      { user ? <SendMessageForm /> : <LoginBox />}
    </main>
  ); // retorna algo ao chamador
}

/** anotações
 * main: utilizado para identificar algo importante e único
 * dentro do main existe a nossa aplicação importada como componentes
 */

import { FormEvent, useContext, useState } from "react"; // framework que vai lidar com diversas coisas importante
import { VscSignOut, VscGithubInverted } from "react-icons/vsc"; // dependência para lidar com icones
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import style from "./style.module.scss";

// função que vai servi para criar o visual e enviar a mensagem para o servidor
export function SendMessageForm() {
  const { user, SignOut } = useContext(AuthContext); // usando o conceito de contexto
  const [message, setMessage] = useState(""); // usando o conceito de imutabilidade

  // função que vai servi para enviar as mensagens para o servidor
  async function HandleSendMessage(event: FormEvent) {
    event.preventDefault(); // desativa o recarregamento da página

    if (!message.trim()) { // verifica se existe algo para ser salvo
      return;
    }

    await api.post("message", { message }); // chama o servidor

    setMessage(""); // apaga a mensagem salva
  }

  return (
    <div className={style.sendMessageFormWrapper}>
      <button onClick={SignOut} className={style.signOutButton}>
        <VscSignOut size="32" />
      </button>

      <header className={style.userInformation}>
        <div className={style.userImage}>
          <img src={user?.avatarUrl} alt="Foto de perfil" />
        </div>

        <strong className={style.userName}>{user?.name}</strong>

        <span className={style.userGitHub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>

      <form onSubmit={HandleSendMessage} className={style.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>

        <textarea
          name="message"
          id="message"
          placeholder="Qual é a sua expectativa para o evento?"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  ); // retornar algo criando o conteudo na página
}

/** anotações
 * div: serve para agrupar os comandos
 * button: cria um botão para receber um função com um icone
 * header: define que um grupo de comandos será o cabeçalho
 * img: insere uma imagem
 * strong: insere um texto com destaque
 * span: cria um texto sem destaque
 * form: utilizado para envio de informação
 * label: insere um texto como identificação de algo
 * textarea: campo para inserir texto
 *   name: da um nome ao campo
 *   placeholder: define um texto descritivo
 *   onChange: serve para executar algo quando um texto for inserido
 *   value: define o texto dentro do campo
 */

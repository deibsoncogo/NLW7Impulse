import { useContext } from "react"; // framework que vai lidar com diversas coisas importante
import { VscGithubInverted } from "react-icons/vsc"; // dependência para lidar com icones
import { AuthContext } from "../../contexts/authContext";
import style from "./style.module.scss";

// função que vai conter os itens para realizar o login
export function LoginBox() {
  const { signInUrl } = useContext(AuthContext); // recebe os dados contexto

  return (
    <div className={style.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>

      <a href={signInUrl} className={style.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </a>
    </div>
  ); // retornar algo criando o conteudo na página
}

/** anotações
 * div: servira para agrupar todo o conteudo
 * strong: vai conter um texto para chamar a atenção
 * a: servira para criar um link para a página de login e dentro temos um icone com um texto
 */

import { useEffect, createContext, ReactNode, useState } from "react"; // framework que vai lidar com diversas coisas importante
import { api } from "../services/backend";

// tipagem do usuario da aplicação
type IUser = {
  id: string;
  name: string;
  login: string;
  avatarUrl: string;
}

// tipagem do recebimento de informação da requisição post authenticate
type IAuthResponse = {
  token: string;
  user: IUser;
}

// tipagem padrão para receber toda nossa aplicação
type IAuthProvider = {
  children: ReactNode;
}

// tipando os itens a ser enviado pelo contexto
type IAuthContextData = {
  user: IUser | null;
  signInUrl: string;
  SignOut: () => void;
}

export const AuthContext = createContext({} as IAuthContextData); // cria o contexto

// função que servira como o providor de informação do contexto
export function AuthProvider(props: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null); // conceito de imutabilidade

  const clientId = "1c8205d8d0f05d407569"; // define o ID do cliente do GitHub

  // define o link para executar o login pelo GitHub
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}`;

  // função que servira para autenticar o usuário
  async function SignIn(gitHubCode: string) {
    const { data } = await api.post<IAuthResponse>("user", { code: gitHubCode }); // chama o servidor

    api.defaults.headers.common.authorization = `Bearer ${data.token}`; // salva o token no cabeçalho da requisição

    localStorage.setItem("nlw7Token", data.token); // salva algo no local storage

    setUser(data.user); // salva o usuário com o conceito de imutabilidade
  }

  // função para deslogar o usuário
  function SignOut() {
    setUser(null); // apaga o usuário salvo
    localStorage.removeItem("nlw7Token"); // apaga a informação salva no local storage
  }

  useEffect(() => { // serve para executar algo quando o arquivo for iniciado
    const token = localStorage.getItem("nlw7Token"); // carrega a informação salva no local storage

    if (token) { // verifica se existe algo salvo na variável
      api.defaults.headers.common.authorization = `Bearer ${token}`; // salva o token no cabeçalho da requisição

      api.get<IUser>("user").then((response) => { // realiza a chamada ao servidor
        setUser(response.data); // salva o usuário dentro do frontend
      });
    }
  }, []);

  useEffect(() => { // serve para executar algo quando o arquivo for iniciado
    const url = window.location.href; // pega a URL atual
    const hasCodeGitHub = url.includes("?code="); // verifica se existe algo na variável

    if (hasCodeGitHub) { // verifica se existe algo salvo na variável
      const [urlWithoutCode, gitHubCode] = url.split("?code="); // divide a variável baseando no critério

      window.history.pushState({}, "", urlWithoutCode); // altera o endereço URL

      SignIn(gitHubCode); // chama a função
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signInUrl, user, SignOut }}>
      {props.children}
    </AuthContext.Provider>
  ); // retorna algo ao chamador
}

/** anotações
 * AuthContext.Provider serve para inserir toda as informações dentro do contexto
 */

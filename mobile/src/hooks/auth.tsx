import React, { createContext, useContext, useEffect, useState } from "react"; // importando um framework
import AsyncStorage from "@react-native-async-storage/async-storage"; // dependência para lidar com o sincronismo do storage
import * as AuthSession from "expo-auth-session"; // dependência para lidar com a autenticação
import { api } from "../services/api";

type IUser = { // cria a tipagem de usuário
  id: string;
  name: string;
  login: string;
  avatarUrl: string;
}

type IAuthResponseBackend = { // cria a tipagem da resposta da autenticação do backend
  token: string;
  user: IUser;
}

type IAuthSessionResponse ={ // cria a tipagem da resposta de autorização
  params: {
    code?: string;
    error?: string;
  },
  type?: string;
}

type IAuthProvider = { // cria a tipagem do provider do contexto
  children: React.ReactNode;
}

type IAuthContextData = { // cria a tipagem do recebimento das informações
  user: IUser | null;
  isSigningIn: boolean;
  SignIn: () => Promise<void>;
  SignOut: () => Promise<void>;
}

// variável que será o contexto inserindo as informações dentro da parte da aplicação selecionada
export const AuthContext = createContext({} as IAuthContextData);

// função que será o provider recebendo a parte da aplicação selecionada
export function AuthProvider({ children }: IAuthProvider) {
  const [isSigningIn, setIsSigningIn] = useState(true); // usando o conceito de imutabilidade
  const [user, setUser] = useState<IUser | null>(null); // usando o conceito de imutabilidade

  const clientId = "e354e9baaed856d4d48d"; // ID do cliente com a conexão

  // função que executará o login do usuário
  async function SignIn(): Promise<void> {
    try { // serve para captar um erro
      setIsSigningIn(true); // avisa que o login foi iniciado

      // define o caminho de autenticação do usuário
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user`;

      // inicia a autenticação do usuário com o GitHub
      const authSession = await AuthSession.startAsync({ authUrl }) as IAuthSessionResponse;

      // verifica o status da autenticação com o GitHub
      if (authSession.type === "success" && authSession.params.error !== "access_denied") {
        const authResponseBackend = await api.post("/authenticate", { code: authSession.params.code }); // chama uma rota do backend

        const { user, token } = authResponseBackend.data as IAuthResponseBackend; // desestrutura os dados recebido

        api.defaults.headers.common.Authorization = `Bearer ${token}`; // insere o token nas requisições

        await AsyncStorage.setItem("NLW7HeatMobile:user", JSON.stringify(user)); // salva o usuário no storage
        await AsyncStorage.setItem("NLW7HeatMobile:token", token); // salva o token no storage

        setUser(user); // salva o usuário na aplicação
      }
    } catch (error) { // define oque executar se captar um erro
      console.log(error);
    } finally { // define oque sempre executar no final
      setIsSigningIn(false); // avisa que o login foi encerrado
    }
  }

  // função que executar o logoff do usuário
  async function SignOut(): Promise<void> {
    setUser(null); // remove o usuário salvo na aplicação

    await AsyncStorage.removeItem("NLW7HeatMobile:user"); // remove o usuário salvo no storage
    await AsyncStorage.removeItem("NLW7HeatMobile:token"); // remove o token salvo no storage
  }

  useEffect(() => { // serve para executar algo por primeiro
    async function LoadUserStorageData() { // função que vai verificar se já existe um usuário logado
      setIsSigningIn(true); // avisa que o login foi iniciado

      const userStorageLoad = await AsyncStorage.getItem("NLW7HeatMobile:user"); // busca o usuário salvo no storage
      const tokenStorageLoad = await AsyncStorage.getItem("NLW7HeatMobile:token"); // busca o token salvo no storage

      if (userStorageLoad && tokenStorageLoad) { // verifica se buscou algo no storage
        api.defaults.headers.common.Authorization = `Bearer ${tokenStorageLoad}`; // insere o token na requisição
        setUser(JSON.parse(userStorageLoad)); // salva na aplicação o usuário encontrado
      }

      setIsSigningIn(false); // avisa que o login foi encerrado
    }

    LoadUserStorageData(); // chama a função
  }, []);

  return ( // retorna algo ao chamador
    <AuthContext.Provider value={{
      user,
      isSigningIn,
      SignIn,
      SignOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// função que já ativa o contexto para assim realizarmos somente uma importação
export function UseAuth() {
  const context = useContext(AuthContext); // ativa o contexto selecionado

  return context; // retorna algo ao chamador
}

/** comentário dos comandos dentro da estrutura tsx
 * AuthContext.Provider vai inserir as informações dentro da parte selecionada da aplicação
 * value local a colocar as informações antes de inserir na aplicação
 * children serve para receber a aplicação
 */

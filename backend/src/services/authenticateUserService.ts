import axios from "axios"; // dependência para lidar com chamadas externas
import { sign } from "jsonwebtoken"; // dependência para lidar com token JSON JWT
import { prismaClient } from "../prisma"; // dependência que vai lidar com o acesso ao DB

interface ICallGitHub { // tipagem da chamada ao GitHub
  access_token: string;
}

interface IUserGitHub { // tipagem dos dados do usuário do GitHub
  id: number;
  name: string;
  login: string;
  avatar_url: string;
}

// classe que será o serviço da criação da autenticação do usuário
class AuthenticateUserService {
  async execute(code: string) { // função principal
    // define o link para executar o login do GitHub
    const url = "https://github.com/login/oauth/access_token";

    // realiza a chamada ao GitHub enviando algumas informações
    const { data: callGitHub } = await axios.post<ICallGitHub>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: { Accept: "application/json" },
    });

    // busca as informações do usuário do GitHub
    const { data: userGitHub } = await axios.get<IUserGitHub>("https://api.github.com/user", { headers: { authorization: `Bearer ${callGitHub.access_token}` } });

    // desestrutura para poder utilizar com mais facilidade
    const { id, name, login, avatar_url: avatarUrl } = userGitHub;

    // busca o usuário do GitHub pelo ID no banco de dados
    let user = await prismaClient.user.findFirst({ where: { githubId: id } });

    if (!user) { // se não existir o usuário ele será criado
      user = await prismaClient.user.create({
        data: {
          name,
          login,
          githubId: id,
          avatarUrl,
        },
      });
    }

    const token = sign( // cria o token
      { // // payload do token
        user: { // inserindo as informações do usuário
          id: user.id,
          name: user.name,
          avatarUrl: user.avatarUrl,
        },
      },
      process.env.JWT_SECRET, // chave secreta
      { // configuração do token
        subject: user.id, // define uma identificação única
        expiresIn: "10d", // tempo de validade
      },
    );

    return { token, user }; // retornar algo ao chamador
  }
}

export { AuthenticateUserService };

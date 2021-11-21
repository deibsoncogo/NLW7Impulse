import "dotenv/config"; // dependência para lidar com as variáveis de ambiente
import { Router } from "express"; // framework principal

const loginRouter = Router(); // método para facilitar o roteamento

// cria o código de login do GitHub
loginRouter.get("", (request, response) => {
  response.status(200).redirect( // link de conexão do GitHub
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});

// retorna o código do login extraido
loginRouter.get("/callback", (request, response) => {
  const { code } = request.query; // recebe os dados

  return response.status(201).json(code); // retornar algo ao chamador
});

export { loginRouter }; // exporta para poder ser chamado

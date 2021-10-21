import { Request, Response, NextFunction } from "express"; // importações para lidar com o recebimento e envio de informações
import { verify } from "jsonwebtoken"; // dependência para lidar com o token do tipo JSON JWT

interface ITokenPayload { // tipagem do payload do token
  sub: string;
}

// função que vai certificar que existe um usuário logado
function EnsureAuthenticatedUser(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization; // recebe os dados

  if (!authToken) { // vai barrar se o token não for informado
    return response.status(401).json({ error: "Token não informado" });
  }

  // split vai dividir as informações do token a partir do espaço
  const [, token] = authToken.split(" ");

  try { // serve para detectar erros
    const { sub } = verify(token, process.env.JWT_SECRET) as ITokenPayload; // autentifica o token

    request.userId = sub; // salva o ID do usuário dentro do request

    return next(); // faz a aplicação continuar seu fluxo
  } catch (error) { // serve para dar tratativa a um erro
    return response.status(401).json({ error: "Token inválido" }); // lança um erro
  }
}

export { EnsureAuthenticatedUser }; // exporta para poder ser chamado

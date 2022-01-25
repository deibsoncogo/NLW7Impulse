import { Request, Response } from "express"; // importações para lidar com o recebimento de envio de informações
import { AuthenticateUserService } from "../services/authenticateUserService";

// classe que será o controller da criação da autenticação do usuário
export class AuthenticateUserController {
  async execute(request: Request, response: Response) { // função principal
    const { code } = request.body; // recebe os dados

    const authenticateUserService = new AuthenticateUserService(); // instancia o service

    try { // serve para detectar erros
      const result = await authenticateUserService.execute(code); // chama o service

      return response.status(201).json(result); // retornar algo ao chamador
    } catch (error) { // serve para dar tratativa ao erro
      return response.json({ error: error.message }); // realiza a tratativa do erro
    }
  }
}

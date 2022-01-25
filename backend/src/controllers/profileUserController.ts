import { Request, Response } from "express"; // importações para lidar com o recebimento de envio de informações
import { ProfileUserService } from "../services/profileUserService";

// classe que será o controller da busca das informações do usuário
export class ProfileUserController {
  async execute(request: Request, response: Response) { // função principal
    const { userId } = request; // recebe os dados

    const profileUserService = new ProfileUserService(); // instancia o service

    const result = await profileUserService.execute(userId); // chama o service

    return response.status(200).json(result); // retornar algo ao chamador
  }
}

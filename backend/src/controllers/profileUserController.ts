import { Request, Response } from "express"; // importações para lidar com o recebimento de envio de informações
import { ProfileUserService } from "../services/profileUserService";

// classe que será o controller da busca das informações do usuário
class ProfileUserController {
  async execute(request: Request, response: Response) { // função principal
    const { userId } = request; // recebe os dados

    const profileUserService = new ProfileUserService(); // instancia o serviço

    const result = await profileUserService.execute(userId); // chama o serviço

    return response.json(result); // retornar algo ao chamador
  }
}

export { ProfileUserController }; // exporta para poder ser chamado

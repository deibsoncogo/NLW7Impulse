import { Request, Response } from "express"; // importações para lidar com o recebimento de envio de informações
import { CreateMessageService } from "../services/createMessageService";

// classe que será o controller da criação de mensagem
class CreateMessageController {
  async execute(request: Request, response: Response) { // função principal
    const { message } = request.body; // recebe os dados
    const { userId } = request; // recebe os dados

    const createMessageService = new CreateMessageService(); // instancia o serviço

    const result = await createMessageService.execute(message, userId); // chama o serviço

    return response.json(result); // retornar algo ao chamador
  }
}

export { CreateMessageController }; // exporta para poder ser chamado

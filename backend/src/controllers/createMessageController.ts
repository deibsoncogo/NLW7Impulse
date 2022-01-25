import { Request, Response } from "express"; // importações para lidar com o recebimento de envio de informações
import { CreateMessageService } from "../services/createMessageService";

// classe que será o controller da criação de mensagem
export class CreateMessageController {
  async execute(request: Request, response: Response) { // função principal
    const { message } = request.body; // recebe os dados
    const { userId } = request; // recebe os dados

    const createMessageService = new CreateMessageService(); // instancia o service

    const result = await createMessageService.execute(message, userId); // chama o service

    return response.status(201).json(result); // retornar algo ao chamador
  }
}

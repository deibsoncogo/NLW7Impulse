import { Request, Response } from "express"; // importações para lidar com o recebimento de envio de informações
import { ShowLatestMessageService } from "../services/showLatestMessageService";

// classe que será o controller da busca das última mensagens
export class ShowLatestMessageController {
  async execute(request: Request, response: Response) { // função principal
    const showLatestMessageService = new ShowLatestMessageService(); // instancia o serviço

    const result = await showLatestMessageService.execute(); // chama o serviço

    return response.status(200).json(result); // retornar algo ao chamador
  }
}

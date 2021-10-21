import { Request, Response } from "express"; // importações para lidar com o recebimento de envio de informações
import { ShowLatestMessageService } from "../services/showLatestMessageService";

// classe que será o controller da busca das última mensagens
class ShowLatestMessageController {
  async execute(request: Request, response: Response) { // função principal
    const showLatestMessageService = new ShowLatestMessageService(); // instancia o serviço

    const result = await showLatestMessageService.execute(); // chama o serviço

    return response.json(result); // retornar algo ao chamador
  }
}

export { ShowLatestMessageController }; // exporta para poder ser chamado

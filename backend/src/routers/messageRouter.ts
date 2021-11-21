import { Router } from "express"; // importação para lidar com as rotas
import { CreateMessageController } from "../controllers/createMessageController";
import { ShowLatestMessageController } from "../controllers/showLatestMessageController";
import { EnsureAuthenticatedUser } from "../middlewares/ensureAuthenticatedUser";

const messageRouter = Router(); // método para facilitar o roteamento

// cria o instanciamento para executar corretamente o arquivo
const showLatestMessageController = new ShowLatestMessageController().execute;
const createMessageController = new CreateMessageController().execute;

messageRouter.get("", showLatestMessageController); // lista as últimas mensagens

messageRouter.use(EnsureAuthenticatedUser); // executa a autenticação do usuário
messageRouter.post("", createMessageController); // cria uma mensagem

export { messageRouter }; // exporta para poder ser chamado

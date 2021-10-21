import { Router } from "express"; // importação para lidar com as rotas
import { AuthenticateUserController } from "../controllers/authenticateUserController";
import { CreateMessageController } from "../controllers/createMessageController";
import { ProfileUserController } from "../controllers/profileUserController";
import { ShowLatestMessageController } from "../controllers/showLatestMessageController";
import { EnsureAuthenticatedUser } from "../middlewares/ensureAuthenticatedUser";

const router = Router(); // método para facilitar o roteamento

router.post("/authenticate", new AuthenticateUserController().execute); // cria a autenticação do usuário

router.post("/message", EnsureAuthenticatedUser, new CreateMessageController().execute); // cria uma mensagem

router.get("/message/last", new ShowLatestMessageController().execute); // lista as últimas mensagens

router.get("/profile", EnsureAuthenticatedUser, new ProfileUserController().execute); // busca as informações do usuário

export { router }; // exporta para poder ser chamado

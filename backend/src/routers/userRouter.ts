import { Router } from "express"; // importação para lidar com as rotas
import { AuthenticateUserController } from "../controllers/authenticateUserController";
import { ProfileUserController } from "../controllers/profileUserController";
import { EnsureAuthenticatedUser } from "../middlewares/ensureAuthenticatedUser";

const userRouter = Router(); // método para facilitar o roteamento

// cria o instanciamento para executar corretamente o arquivo
const authenticateUserController = new AuthenticateUserController().execute;
const profileUserController = new ProfileUserController().execute;

// início das rotas de usuário
userRouter.post("", authenticateUserController); // cria a autenticação do usuário

userRouter.use(EnsureAuthenticatedUser); // executa a autenticação do usuário
userRouter.get("", profileUserController); // recupera as informações do usuário

export { userRouter }; // exporta para poder ser chamado

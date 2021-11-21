import { Router } from "express"; // importação para lidar com as rotas
import { loginRouter } from "./loginRouter";
import { messageRouter } from "./messageRouter";
import { userRouter } from "./userRouter";

const router = Router(); // método para facilitar o roteamento

// rotas da aplicação
router.use("/login", loginRouter);
router.use("/user", userRouter);
router.use("/message", messageRouter);

export { router }; // exporta para poder ser chamado

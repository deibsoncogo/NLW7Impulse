import "dotenv/config"; // dependência para lidar com as variáveis de ambiente
import express from "express"; // framework principal
import cors from "cors"; // dependência para controlar o acesso a aplicação
import http from "http"; // dependência nativa para lidar com o tipo de servidor
import { Server } from "socket.io"; // dependência para lidar com o tipo de servidor
import { router } from "./routers";

const app = express(); // método para facilitar a utilização

app.use(cors()); // ativa o cors em toda aplicação

const serverHttp = http.createServer(app); // cria o servidor do tipo HTTP vinculado ao APP

const io = new Server(serverHttp, { cors: { origin: "*" } }); // cria o servidor do tipo Socket vinculado ao HTTP e APP

io.on("connection", (socket) => { // envia uma mensagem ao detectar este evento
  console.log(`Usuário conectado pelo Socket, ${socket.id}`);
});

app.use(express.json()); // define o tipo do dado a trabalhar

app.use(router); // executa o arquivo de rota

export { serverHttp, io }; // exporta para poder ser chamado

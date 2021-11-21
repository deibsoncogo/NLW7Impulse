import { io } from "../app"; // dependência para lidar com o conexão de envio e recebimento das mensagens
import { prismaClient } from "../prisma"; // dependência que vai lidar com o acesso ao DB

// classe que será o servico da criação de mensagem
export class CreateMessageService {
  async execute(text: string, userId: string) { // função principal
    const message = await prismaClient.message.create({ // salva a mensagem no banco de dados
      data: {
        text,
        userId,
      },
      include: { user: true },
    });

    const infoWS = { // define as informações a enviar no evento do Socket
      text: message.text,
      userId: message.userId,
      createdAt: message.createdAt,
      user: {
        name: message.user.name,
        avatarUrl: message.user.avatarUrl,
      },
    };

    io.emit("newMessage", infoWS); // cria um evento do Socket

    return message; // retornar algo ao chamador
  }
}

import { prismaClient } from "../prisma"; // dependência que vai lidar com o acesso ao DB

// classe que será o controller da busca das última mensagens
class ShowLatestMessageService {
  async execute() { // função principal
    const message = await prismaClient.message.findMany({ // realiza a busca
      take: 3, // define quantos dados retornar
      orderBy: { createdAt: "desc" }, // ordena os dados
      include: { user: true }, // permite retornar as informações do usuário
    });

    return message; // retornar algo ao chamador
  }
}

export { ShowLatestMessageService }; // exporta para poder ser chamados

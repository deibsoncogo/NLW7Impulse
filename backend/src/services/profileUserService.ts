import { prismaClient } from "../prisma"; // dependência que vai lidar com o acesso ao DB

// classe que será o serviço da busca das informações do usuário
class ProfileUserService {
  async execute(userId: string) { // função principal
    const user = await prismaClient.user.findFirst({ where: { id: userId } }); // realiza a busca

    return user; // retorna algo ao chamador
  }
}

export { ProfileUserService }; // exporta para poder ser chamado

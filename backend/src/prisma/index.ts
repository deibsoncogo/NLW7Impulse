import { PrismaClient } from "@prisma/client"; // dependĂȘncia que vai lidar com o acesso ao DB

const prismaClient = new PrismaClient(); // instancia para poder ser utilizado corretamente

export { prismaClient }; // exporta para poder ser chamado

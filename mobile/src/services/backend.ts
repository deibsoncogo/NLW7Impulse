import axios from "axios"; // dependência para criar a conexão com o backend

// cria a conexão com um endereço padrão e exporta para poder ser chamado
export const api = axios.create({ baseURL: "http://192.168.1.103:3333" });

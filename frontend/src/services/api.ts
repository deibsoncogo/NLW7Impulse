import axios from "axios"; // dependência para lidar com requisições

// cria e exporta a conexão com o banco de dados
export const api = axios.create({ baseURL: "http://localhost:3333" });

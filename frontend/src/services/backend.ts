import axios from "axios"; // dependência para lidar com requisições ao backend
import io from "socket.io-client"; // dependência que vai analisar as ações dos clientes no backend

const urlBackend = "http://localhost:3333";

// cria e exporta a conexão com o servidor
export const api = axios.create({ baseURL: urlBackend });
export const socket = io(urlBackend);

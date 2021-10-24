import "./styles/global.css"; // importando uma estilização global
import React from "react"; // framework que vai lidar com diversas coisas importante
import ReactDOM from "react-dom"; // framework que vai lidar com as rotas da aplicação
import { App } from "./App"; // importando o arquivo principal da aplicação
import { AuthProvider } from "./contexts/auth"; // importando o contexto de autenticação

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

/** anotações
 * ReactDOM: comando padrão para criar as rotas
 * React.StrictMode: comando padrão
 * AuthProvider: comando utilizado para aplicar o contexto
 * App: comando para importar nossa aplicação
 * document.getElementById("root"): comando que insere nosso programar JSX dentro do arquivo HTML
 */

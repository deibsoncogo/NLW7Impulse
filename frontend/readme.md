# Rocketseat - Next Level Week 7 Heat - Trilha Impulse - Frontend
No frontend desenvolvemos um site junto do Diego Fernandes que seja capaz de realizar o login do usuário pelo Github, salvar as mensagens enviadas e mostrar na tela somente as últimas

## Ambiente de trabalho
Para instalar as dependências necessárias temos que executar o seguinte comando
```bash
yarn
```

Para executar esta parte é necessário você já ter criado o sistema de autenticação para o backend, agora iremos apenas realizar um ajuste no callback e no client ID
  1. Acesse sua conta, settings, developer settings e OAuth Apps
  2. Selecione o OAuth App criado para o backend e ajuste o callback
     * Authorization callback URL: http://localhost:3000
  3. Copie e cole o Client ID no arquivo abaixo dentro da variável `clientId`
     * frontend\src\contexts\authContext.tsx

Para iniciar o site podemos utilizar o atalho `yarn dev` ou o seguinte comando
```bash
yarn vite
```

O site vai rodar na porta 3000

## Ferramentas e dependências utilizado
As ferramentas utilizadas foram: `Yarn`, `Node JS`, `TypeScript`, `React Native` e `Vite`

As dependências utilizadas foram: `axios`, `react`, `react-dom`, `react-icons`, `sass` e `socket.io-client`

Dependências usadas em modo de desenvolvimento: `eslint`, `typescript` e `vite`

## Imagens
### Tela principal
![Tela principal](/frontend/src/assets/prints/print1.png)

### Tela principal com o usuário logado
![Tela principal com o usuário logado](/frontend/src/assets/prints/print2.png)

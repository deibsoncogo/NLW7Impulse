# Rocketseat - Next Level Week 7 Heat - Trilha Impulse - Backend
No backend desenvolvemos um servidor junto da Daniele Fernandes que seja capaz de realizar o login do usuário pelo Github, salvar as mensagens enviadas e mostrar na tela somente as últimas

## Ambiente de trabalho
Para instalar as dependências necessárias temos que executar o seguinte comando
```bash
yarn
```

Para iniciar o servidor podemos utilizar o atalho `yarn start` ou o seguinte comando
```bash
yarn ts-node-dev --exit-child src/server.ts
```

Para acessar o banco de dados podemos usar o seguinte comando
```bash
yarn prisma studio
```

O servidor vai rodar na porta 3333 e o banco de dados na 5555

## Ferramentas e dependências utilizado
As ferramentas utilizadas foram: `Yarn`, `Node JS`, `TypeScript`

As dependências utilizadas foram: `axios`, `cors`, `dotenv`, `express`, `jsonwebtoken` e `socket.io`

Dependências usadas em modo de desenvolvimento: `eslint`, `prisma`, `ts-node-dev` e `typescript`

## Documentação
Endereço principal: `http://localhost/3333`

### Login
**GET** /login - A rota vai gerar o código de autenticação do Github
```ts
// sem schema

// resposta
{
  status(200).redirect()
}
```

**GET** /login/callback - A rota vai retornar o código de autenticação do Github
```ts
// sem schema

// resposta
{
  status(201).json(string)
}
```

### User
**POST** /user - A partir do código de autenticação iremos salvar as informações do usuário
```ts
{ // schema body
  "code": string
}

// resposta
status(201).json({
  "token": string,
  "user": {
    "id": string,
    "name": string,
    "githubId": number,
    "avatarUrl": string,
    "login": string
  }
})

status(401).json({ "Request failed with" })
```

**GET** /user - A rota mostrar as informações do usuário informado pelo token
```ts
{ // auth bearer token
  string
}

// resposta
status(200).json({
  "id": string,
  "name": string,
  "githubId": number,
  "avatarUrl": string,
  "login": string
})

status(401).json({ "Token não informado" })

status(401).json({ "Token inválido" })
```

### Message
**POST** /message - A rota vai criar uma mensagem
```ts
{ // auth bearer token
  string
}
{ // schema body
  "message": string
}

// resposta
status(201).json({
  "id": string,
  "text": string,
  "createdAt": date,
  "userId": string,
  "user": {
    "id": string,
    "name": string,
    "githubId": number,
    "avatarUrl": string,
    "login": string
  }
})

status(401).json({ "Token não informado" })

status(401).json({ "Token inválido" })
```

**GET** /message - A rota vai listar as últimas mensagens
```ts
// sem schema

// resposta
status(200).json({
  [
    {
      "id": string,
      "text": string,
      "createdAt": date,
      "userId": string
      "user": {
        "id": string,
        "name": string,
        "githubId": number,
        "avatarUrl": string,
        "login": string
      }
    }
  ]
});
```
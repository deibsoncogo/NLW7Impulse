# Rocketseat - Next Level Week 7 Heat - Trilha Impulse - Backend
No backend desenvolvemos um servidor junto da Daniele Fernandes que seja capaz de realizar o login do usuário pelo Github, salvar as mensagens enviadas e mostrar na tela somente as últimas

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW%207%20Impulse%20-%20Node%20JS&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdeibsoncogo%2FNLW7Impulse%2Fmaster%2Fbackend%2FInsomniaNLW7ImpuseBackend.json)

## Ambiente de trabalho
Para instalar as dependências necessárias temos que executar o seguinte comando
```bash
yarn
```

Depois é necessário configurar o sistema de login do GitHub
  1. Acesse sua conta, settings, developer settings e OAuth Apps
  2. Clique em New OAuth App para criar e informar exatamente estes dados
     * Homepage URL: http://localhost:3333
     * Authorization callback URL: http://localhost:3333/login/callback
  3. As demais informações você pode configurar como desejar
  4. Crie um Client ID e Client secrets e guarde estes dados
  5. Na raiz do projeto crie o arquivo .env com as seguintes variáveis ambiente
     * GITHUB_CLIENT_ID= (Client ID salvo no GitHub)
     * GITHUB_CLIENT_SECRET= (Client secrets salvo no GitHub)

Agora é necessário criar a chave mestre para o token dentro do arquivo .env
  JWT_SECRET= (Use MD5 para gerar uma chave segura)

Para iniciar o servidor podemos utilizar o atalho `yarn dev` ou o seguinte comando
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

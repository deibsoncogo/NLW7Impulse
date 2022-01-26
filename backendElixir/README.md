# Rocketseat - Next Level Week 7 Heat - Trilha Impulse - Backend Elixir
No backend desenvolvemos um servidor junto do Rafael Camarda que seja capaz de criar uma nuvem das palavras compostas nas mensagens que mais se repetiram

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW7%20IMPULSE%20-%20ELIXIR&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdeibsoncogo%2FNLW7Impulse%2Fmaster%2FbackendElixir%2FInsomniaNLW7ImpuseBackendElixir.json)

## Ambiente de trabalho
Para instalar as dependências necessárias temos que executar o seguinte comando
```bash
mix deps.get
```

Para criar o container do Docker devemos utilizar este comando
```bash
docker run --name nlw7impulseElixir -e POSTGRES_DB=nlw7impulseDB -e POSTGRES_USER=nlw7impulseElixir -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Para criar as migrations usamos o seguinte comando
```bash
mix ecto.setup
```

Antes de iniciar o servidor temos que copilar o projeto, para isso usamos o primeiro comando e o segundo para executar o servidor
```bash
mix ecto.create
mix phx.server
```

O servidor vai rodar na porta 4000 e o banco de dados na 5432

## Ferramentas e dependências utilizado
As ferramentas utilizadas foram: `Elixir`, `Erlang` e `Phoenix`

As dependências utilizadas foram: `phoenix_ecto`, `ecto_sql`, `postgrex`, `phoenix_live_dashboard`, `swoosh`, `telemetry_metrics`, `telemetry_poller`, `gettext`, `jason`, `plug_cowboy` e `quantum`

## Documentação
Endereço principal: `http://localhost/4000`

### Mensagem
**POST** /api/message - A rota vai criar uma mensagem
```ts
{ // schema body
  "message": string,
  "userName": string,
  "email": string
}

// resposta
status(201).json({
  "message": {
    "id": number,
    "message": string,
    "userName": string,
    "email": string
  },
  "result": string"
})
```

**GET** Sem rota - Esta rota será executada automaticamente pelo sistema ao termino do dia, para alterar está configuração acesse o arquivo abaixo na parte do código informada e altere conforme configurações do [Quantum](https://hexdocs.pm/quantum/crontab-format.html#special-expressions)
  * backendElixir\config\config.exs
```elixir
# configuração que define o tempo em tempo de execução da função
config :backendElixir, BackendElixir.Scheduler,
  jobs: [{ALTERE AQUI, {BackendElixir.Tags.Count, :call, []}}]
```

# módulo que servirá para consultar as mensagens por data
defmodule BackendElixir.Messages.Get do
  # lib para lidar com a filtragem de dados
  import Ecto.Query

  # serve para criar atalhos
  alias BackendElixir.{Message, Repo}

  # função principal para filtrar as mensagens do dia atual
  def todayMessage do
    # seleciona o valor desejado
    today = Date.utc_today()

    # realiza uma filtragem
    query = from message in Message, where: type(message.inserted_at, :date) == ^today

    # reporta o resultado
    Repo.all(query)
  end
end

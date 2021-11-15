# módulo que servirá para controlar a rota de criação de mensagem
defmodule BackendElixirWeb.MessageController do
  # define que é um controlador
  use BackendElixirWeb, :controller

  # cria um atalho para o comando abaixo
  alias BackendElixir.Message
  alias BackendElixir.Messages.Create

  # função princiapl que vai ter a conexão e os parametros
  def create(conn, params) do
    params
    |> Create.call()
    |> handleCreate(conn)
  end

  # função privada que vai verificar o sucesso da rota
  defp handleCreate({:ok, %Message{} = message}, conn) do
    conn
    |> put_status(:created)
    |> render("create.json", message: message)
  end

  # função privada que vai verificar o erro da rota
  defp handleCreate({:error, %{result: result, status: status}}, conn) do
    conn
    |> put_status(status)
    |> put_view(BackendElixirWeb.ErrorView)
    |> render("error.json", result: result)
  end
end

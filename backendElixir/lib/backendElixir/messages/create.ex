# módulo que servirá para salvar uma mensagem
defmodule BackendElixir.Messages.Create do
  # serve para criar atalhos
  alias BackendElixir.{Message, Repo}

  # função principal para salvar uma mensagem
  def call(params) do
    params
    # trata a mensagem
    |> Message.changeset()
    # salva a mensagem
    |> Repo.insert()
    # trata o resultado
    |> handleInsert()
  end

  # função privada que vai verificar o sucesso no salvamento
  defp handleInsert({:ok, %Message{}} = result), do: result

  # função privada que vai verificar o erro no salvamento
  defp handleInsert({:error, result}), do: {:error, %{result: result, status: :bad_request}}
end

defmodule BackendElixirWeb.ErrorView do
  use BackendElixirWeb, :view

  # importa uma função
  import Ecto.Changeset, only: [traverse_errors: 2]

  # cria um atalho para o comando
  alias Ecto.Changeset

  def template_not_found(template, _assigns) do
    %{errors: %{detail: Phoenix.Controller.status_message_from_template(template)}}
  end

  # função principal criada por nos que vai receber o erro e tratar ele
  def render("error.json", %{result: %Changeset{} = changeset}) do
    %{result: traverseErrors(changeset)}
  end

  # função privada para trata o erro criado por nos
  defp traverseErrors(changeset) do
    traverse_errors(changeset, fn {msg, opts} ->
      Enum.reduce(opts, msg, fn {key, value}, acc ->
        String.replace(acc, "%{#{key}}", to_string(value))
      end)
    end)
  end
end

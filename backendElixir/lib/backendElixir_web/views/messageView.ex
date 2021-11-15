# módulo que servira para apresentar os resutlado de sucesso tratado
defmodule BackendElixirWeb.MessageView do
  # define que será uma view
  use BackendElixirWeb, :view

  # função principal que servirá para retornar uma mensagem de sucesso
  def render("create.json", %{message: message}) do
    %{result: "Mensagem criada", message: message}
  end
end

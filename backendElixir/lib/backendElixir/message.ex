# módulo que servirá para vincular os dados com o banco de dados
defmodule BackendElixir.Message do
  # injeta estem dentro do modulo
  use Ecto.Schema

  # improtação para lidar com as alterações de dados
  import Ecto.Changeset

  # serve para define os campos obrigatórios
  @requiredParams [:message, :userName, :email]

  # converte os valores para json
  @derive {Jason.Encoder, only: [:id] ++ @requiredParams}

  # cria o vinculo dos dados com a tabela no banco de dados
  schema "messages" do
    # informamos os valores a ser buscado na tabela
    field :message, :string
    field :userName, :string
    field :email, :string

    # cria as colunas que vai registra o tempo de quando foi criado e/ou alterado algo
    timestamps()
  end

  # função principal para receber os dados e validar ele
  def changeset(params) do
    %__MODULE__{}
    # recebe as informações
    |> cast(params, @requiredParams)
    # valida se recebeu as informações obrigatória
    |> validate_required(@requiredParams)
    # valida o tamanho da mensagem
    |> validate_length(:message, min: 1, max: 140)
    # valida se o email possui @
    |> validate_format(:email, ~r/@/)
  end
end

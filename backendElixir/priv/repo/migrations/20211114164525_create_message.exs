# módulo que servirá para criar a tabela de mensagem
defmodule BackendElixir.Repo.Migrations.CreateMessage do
  # injeta estem dentro do modulo
  use Ecto.Migration

  # função principal que vai criar a tabela de mensagem
  def change do
    # cria a tabela
    create table(:messages) do
      # define o nome e o tipo de dado da coluna
      add :message, :string
      add :userName, :string
      add :email, :string

      # cria as colunas que vai registra o tempo de quando foi criado e/ou alterado algo
      timestamps()
    end
  end
end

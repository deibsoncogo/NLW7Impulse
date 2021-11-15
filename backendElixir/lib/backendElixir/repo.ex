defmodule BackendElixir.Repo do
  use Ecto.Repo,
    otp_app: :backendElixir,
    adapter: Ecto.Adapters.Postgres
end

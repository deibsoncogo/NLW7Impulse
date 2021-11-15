defmodule BackendElixir.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      BackendElixir.Repo,
      BackendElixirWeb.Telemetry,
      {Phoenix.PubSub, name: BackendElixir.PubSub},
      BackendElixirWeb.Endpoint,
      BackendElixir.Scheduler
    ]

    opts = [strategy: :one_for_one, name: BackendElixir.Supervisor]
    Supervisor.start_link(children, opts)
  end

  @impl true
  def config_change(changed, _new, removed) do
    BackendElixirWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end

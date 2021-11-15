import Config

config :backendElixir,
  ecto_repos: [BackendElixir.Repo]

config :backendElixir, BackendElixirWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: BackendElixirWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: BackendElixir.PubSub,
  live_view: [signing_salt: "AReS4fZt"]

# configuração que define o tempo em tempo de execução da função
config :backendElixir, BackendElixir.Scheduler,
  jobs: [{"0 0 * * *", {BackendElixir.Tags.Count, :call, []}}]

config :backendElixir, BackendElixir.Mailer, adapter: Swoosh.Adapters.Local

config :swoosh, :api_client, false

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

import_config "#{config_env()}.exs"

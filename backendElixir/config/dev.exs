import Config

# configurações do banco de dados
config :backendElixir, BackendElixir.Repo,
  username: "nlw7impulseElixir",
  password: "docker",
  database: "backendelixir_dev",
  hostname: "localhost",
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :backendElixir, BackendElixirWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4000],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "phZT3OxWruixMT+1GD9iJ4VoqIdQNBbMOtCrfPKt9p3rV15mep99IVHJUM2rc8GT",
  watchers: []

config :logger, :console, format: "[$level] $message\n"

config :phoenix, :stacktrace_depth, 20

config :phoenix, :plug_init_mode, :runtime

import Config

# configurações do banco de dados
config :backendElixir, BackendElixir.Repo,
  username: "nlw7impulseElixir",
  password: "docker",
  database: "backendelixir_test#{System.get_env("MIX_TEST_PARTITION")}",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

config :backendElixir, BackendElixirWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "ZQ5FUMIR75BbZ+iUZjcwV5d98jCA/l4QLNM60r8Zqob/QQBGJnYpZ6zv8on6FBZo",
  server: false

config :backendElixir, BackendElixir.Mailer, adapter: Swoosh.Adapters.Test

config :logger, level: :warn

config :phoenix, :plug_init_mode, :runtime

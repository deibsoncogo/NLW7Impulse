defmodule BackendElixirWeb.Router do
  use BackendElixirWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  # criamos as rotas aqui dentro
  scope "/api", BackendElixirWeb do
    pipe_through :api

    post "/message", MessageController, :create
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: BackendElixirWeb.Telemetry
    end
  end

  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end

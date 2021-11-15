defmodule BackendElixirWeb do
  def controller do
    quote do
      use Phoenix.Controller, namespace: BackendElixirWeb

      import Plug.Conn
      import BackendElixirWeb.Gettext
      alias BackendElixirWeb.Router.Helpers, as: Routes
    end
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/backendElixir_web/templates",
        namespace: BackendElixirWeb

      import Phoenix.Controller,
        only: [get_flash: 1, get_flash: 2, view_module: 1, view_template: 1]

      unquote(view_helpers())
    end
  end

  def router do
    quote do
      use Phoenix.Router

      import Plug.Conn
      import Phoenix.Controller
    end
  end

  def channel do
    quote do
      use Phoenix.Channel
      import BackendElixirWeb.Gettext
    end
  end

  defp view_helpers do
    quote do
      import Phoenix.View

      import BackendElixirWeb.ErrorHelpers
      import BackendElixirWeb.Gettext
      alias BackendElixirWeb.Router.Helpers, as: Routes
    end
  end

  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end

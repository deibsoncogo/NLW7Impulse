defmodule BackendElixirWeb.ErrorHelpers do
  def translate_error({msg, opts}) do
    if count = opts[:count] do
      Gettext.dngettext(BackendElixirWeb.Gettext, "errors", msg, msg, count, opts)
    else
      Gettext.dgettext(BackendElixirWeb.Gettext, "errors", msg, opts)
    end
  end
end

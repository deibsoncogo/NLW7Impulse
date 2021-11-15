# módulo que servirá para contar as repetições das palavras
defmodule BackendElixir.Tags.Count do
  # cria um atalho para o comando abaixo
  alias BackendElixir.Messages.Get

  # função principal para realizar a contagem da repetição das palavras
  def call() do
    # recebe a mensagem
    Get.todayMessage()
    |> Task.async_stream(fn message -> countWords(message.message) end)
    |> Enum.reduce(%{}, fn elem, acc -> sumValues(elem, acc) end)
  end

  # função privada que coloca as palavras em arrays e conta sua repetição por mesangem
  defp countWords(message) do
    message
    |> String.split()
    |> Enum.frequencies()
  end

  # função privada que soma as repetições de todas as mensagens
  defp sumValues({:ok, map1}, map2) do
    Map.merge(map1, map2, fn _key, value1, value2 -> value1 + value2 end)
  end
end

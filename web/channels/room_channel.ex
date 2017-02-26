defmodule Magicvue.RoomChannel do
  use Phoenix.Channel

  def join("room:" <> _room, _message, socket) do
    {:ok, socket}
  end
  
  def handle_in("new_msg", message, socket) do
    broadcast! socket, "new_msg", message
    {:noreply, socket}
  end
end

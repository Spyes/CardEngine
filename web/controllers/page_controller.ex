defmodule Magicvue.PageController do
  use Magicvue.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

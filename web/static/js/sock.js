import { Socket } from 'phoenix'

export let socket, channel;

export default function connectChannel () {
  socket = new Socket("/socket", {params: {}});
  socket.connect();
  channel = socket.channel("room:lobby", {});
  channel.join()
         .receive("ok", resp => { console.log("Joined successfully") })
         .receive("error", resp => { console.log("Could not connect") })
}

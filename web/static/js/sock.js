import { Socket } from 'phoenix'

export let socket, channel;

export default function connectChannel () {
  socket = new Socket("/socket", {params: {}});
  socket.connect();
  join("lobby")
}

export function join (topic, params = {}) {
    channel = socket.channel(`room:${topic}`, params);
    channel.join()
           .receive('ok', resp => { console.log(`Joined ${topic}`) })
           .receive('error', resp => { console.log('Could not connect') })
}

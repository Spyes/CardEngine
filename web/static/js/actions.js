import { channel } from './sock'
import store from '../store'

export default function commit(payload) {
  channel.push("new_msg", {payload})
         .receive("ok", payload => { store.commit(payload.payload) })
}

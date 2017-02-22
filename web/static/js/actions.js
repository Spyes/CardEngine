import { channel } from './sock'

export default function commit(payload) {
  channel.push("new_msg", {payload})
}

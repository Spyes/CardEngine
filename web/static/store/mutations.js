export default {
  setPreview(state, payload) {
    const { card } = payload
    state.preview = card
  }
}

export default {
  setPreview (state, payload) {
    const { card } = payload
    state.preview = card
  },
  onClickDeck (state, payload) {
    const { player } = payload
    if (player.name !== state.me) return;
    const found = state.players.find(p => p.name === player.name)
    if (!found.deck.length) return;
    const card = found.deck.pop()
    found.hand.push(card)
  }
}

import { channel } from '../js/sock'

export default {
  setPreview (state, payload) {
    const { card } = payload
    state.preview = card
  },
  onClickDeck (state, payload) {
    const { player } = payload
    const found = state.players.find(p => p.name === player.name)
    if (!found.deck.length) return;
    const card = found.deck.pop()
    found.hand.push(card)
  },
  castCard (state, payload) {
    const { player, card } = payload
    const found = state.players.find(p => p.name === player.name)
    found.battlefield.push(card)
    found.hand = found.hand.filter(c => c.name !== card.name)
  },
  moveToGraveyard (state, payload) {
    const { player, card } = payload
    const found = state.players.find(p => p.name === player.name)
    found.graveyard.push(card)
    found.battlefield = found.battlefield.filter(c => c.name !== card.name)
  }
}

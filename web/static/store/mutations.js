import { join } from '../js/sock'

export default {
  playerLogin (state, payload) {
    const { name } = payload
    state.lobby.players.push({name})
  },
  setView (state, payload) {
    state.current_view = payload.view
  },
  createGame (state, payload) {
    const { name } = payload
    state.lobby.games.push({name})
    join(name)
  },
  joinGame (state, payload) {
    const { player } = payload
    state.game.players.push({
      name: player.name,
      battlefield: [],
      graveyard: [],
      deck: [{name: 'Island'}],
      hand: [{name: 'Swamp'}]
    })
  },
  setPreview (state, payload) {
    const { card } = payload
    state.game.preview = card
  },
  onClickDeck (state, payload) {
    const { player } = payload
    const found = state.game.players.find(p => p.name === player.name)
    if (!found.deck.length) return;
    const card = found.deck.pop()
    found.hand.push(card)
  },
  castCard (state, payload) {
    const { player, card } = payload
    const found = state.game.players.find(p => p.name === player.name)
    found.battlefield.push(card)
    found.hand = found.hand.filter(c => c.name !== card.name)
  },
  moveToGraveyard (state, payload) {
    const { player, card } = payload
    const found = state.game.players.find(p => p.name === player.name)
    found.graveyard.push(card)
    found.battlefield = found.battlefield.filter(c => c.name !== card.name)
  }
}

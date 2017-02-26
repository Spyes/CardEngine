<template>

  <div class="Lobby">
    <h4>Players</h4>
    <PlayersList :players="lobby.players" />
    <GamesList
        :games="lobby.games"
        :onclick="joinGame"
    />
    <input
        type="text"
        v-model="game_name"
    />
    <input
        type="button"
        value="New Game"
        v-on:click="onNewGame"
    />
  </div>

</template>

<script>
import PlayersList from './PlayersList.vue'
import GamesList from './GamesList.vue'
import commit from '../../js/actions'

export default {
  name: 'Lobby',
  components: {
    PlayersList,
    GamesList
  },
  props: {
    lobby: {
      type: Object,
      default: {}
    }
  },
  methods: {
    onNewGame () {
      commit({
        type: 'createGame',
        name: this.game_name
      })
      commit({
        type: 'joinGame',
        player: {
          name: this.$store.state.me
        }
      })
      this.$store.commit({
        type: 'setView',
        view: 'game'
      })
    },
    joinGame (name) {
      commit({
        type: 'joinGame',
        name
      })
    }
  }
}
</script>

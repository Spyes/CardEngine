<template>

  <div class="Game">
    <Login
        v-if="login"
    />
    <Lobby
        v-if="lobby"
        :lobby="$store.state.lobby"
    />
    <Field
        v-if="in_game"
    />
  </div>

</template>

<script>
import Lobby from './Lobby/Lobby.vue'
import Field from './Field.vue'
import Login from './Login.vue'
  
export default {
  name: 'Game',
  components: {
    Lobby,
    Field,
    Login
  },
  computed: {
    login () {
      return this.$store.state.current_view === 'login'
    },
    lobby () {
      return this.$store.state.current_view === 'lobby'
    },
    in_game () {
      return this.$store.state.current_view === 'game'
    }
  }
}
</script>

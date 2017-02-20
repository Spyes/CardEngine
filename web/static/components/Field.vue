<template>

  <div class="Field">
    <div v-for="player in players">
      <Player :player="player" :me="isMe(player)"></Player>
      <hr/>
    </div>
    <div class="Preview">
      Preview: <Card :card="preview" />
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Player from './Player.vue'
import Card from './Card.vue'

export default {
  name: 'Field',
  components: {
    Player,
    Card
  },
  computed: {
    players () {
      return this.$store.state.players
    },
    preview () {
      return this.$store.state.preview
    }
  },
  methods: {
    isMe (player) {
      return this.$store.state.me === player.name
    }
  }
}
</script>

<style lang="sass">
.Field {
  .Player {
    margin-left: 10px;
  }
  .Preview {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: 1px solid black;
    width: 30%;
  }
}
</style>

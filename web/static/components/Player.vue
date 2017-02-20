<template>
  
  <div class="Player">
    <div class="name">
      Player: {{ player.name }}
    </div>
    <Deck :onClick="onClickDeck" :deck="player.deck" />
    <Hand :hand="player.hand" :show="me" />
  </div>
  
</template>

<script>
import Hand from './Hand.vue'
import Deck from './Deck.vue'

export default {
  name: 'Player',
  components: {
    Hand,
    Deck
  },
  props: {
    player: {
      type: Object,
      default: {}
    },
    me: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickDeck () {
      const { $store, player } = this
      $store.commit({
        type: 'onClickDeck',
        player
      })
    }
  }
}
</script>

<style lang="sass">
.Player {
  .Hand {
    margin-left: 10px;
  }
}
</style>

  

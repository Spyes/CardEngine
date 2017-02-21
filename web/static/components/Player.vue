<template>
  
  <div class="Player">
    <div class="name">
      Player: {{ player.name }}
    </div>
    <Battlefield :battlefield="player.battlefield" />
    <Deck :onClick="onClickDeck" :deck="player.deck" />
    <Hand :hand="player.hand" :show="me" :onClickCard="onClickCardInHand" />
  </div>
  
</template>

<script>
import Hand from './Hand.vue'
import Deck from './Deck.vue'
import Battlefield from './Battlefield.vue'

export default {
  name: 'Player',
  components: {
    Hand,
    Deck,
    Battlefield
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
    },
    onClickCardInHand (card) {
      const { $store, player } = this
      $store.commit({
        type: 'castCard',
        player,
        card
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

  

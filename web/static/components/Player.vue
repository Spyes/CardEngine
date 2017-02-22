<template>
  
  <div class="Player">
    <div class="name">
      Player: {{ player.name }}
    </div>
    <Battlefield :battlefield="player.battlefield" :onClickCard="onClickCardInBattlefield" />
    <Graveyard :graveyard="player.graveyard" />
    <Deck :onClick="onClickDeck" :deck="player.deck" />
    <Hand :hand="player.hand" :show="me" :onClickCard="onClickCardInHand" />
  </div>
  
</template>

<script>
import Hand from './Hand.vue'
import Deck from './Deck.vue'
import Battlefield from './Battlefield.vue'
import Graveyard from './Graveyard.vue'
import commit from '../js/actions'

export default {
  name: 'Player',
  components: {
    Hand,
    Deck,
    Battlefield,
    Graveyard
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
      const { player } = this
      if (!this.me) return
      commit({
        type: 'onClickDeck',
        player
      })
    },
    onClickCardInHand (card) {
      const { player } = this
      if (!this.me) return
      commit({
        type: 'castCard',
        player,
        card
      })
    },
    onClickCardInBattlefield (card) {
      const { player } = this
      if (!this.me) return
      commit({
        type: 'moveToGraveyard',
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

  

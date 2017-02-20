<template>

  <div class="Deck" v-on:click="onClick">
    Deck ({{ deckCount }})
  </div>
  
</template>

<script>
export default {
  name: 'Deck',
  props: {
    deck: {
      type: Array,
      default: []
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    deckCount () {
      return this.deck.length
    }
  }
}
</script>

<style lang="sass">
.Deck {
  cursor: pointer;
}
</style>

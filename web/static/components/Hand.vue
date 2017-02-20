<template>

  <div class="Hand">
    <div v-if="show">
      Hand: [
      <Card
          v-for="card in hand"
          :card="card"
          :onMouseOver="onMouseOver"
          v-on:mouseout.native="onMouseOut"
      />
      ]
    </div>
    <div class="card-count" v-if="!show">Hand: ({{ cardCount }})</div>
  </div>

</template>

<script>
import Card from './Card'

export default {
  name: 'Hand',
  components: { Card },
  props: {
    hand: {
      type: Array,
      default: []
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardCount () {
      return this.hand.length
    }
  },
  methods: {
    onMouseOver (card) {
      this.$store.commit({
        type: 'setPreview',
        card
      })
    },
    onMouseOut () {
      this.$store.commit({
        type: 'setPreview',
        card: {}
      })
    }
  }
}
</script>

<style lang="sass">
.Hand {
  .Card {
    margin-left: 10px;
  }
}
</style>

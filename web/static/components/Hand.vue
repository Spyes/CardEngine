<template>

  <div class="Hand">
    <Card
        v-for="card in hand"
        :card="card"
        :onMouseOver="onMouseOver"
        v-on:mouseout.native="onMouseOut"
    />
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
    }
  },
  methods: {
    onMouseOver(card) {
      this.$store.commit({
        type: 'setPreview',
        card
      })
    },
    onMouseOut() {
      this.$store.commit({
        type: 'setPreview',
        card: {}
      })
    }
  }
}
</script>

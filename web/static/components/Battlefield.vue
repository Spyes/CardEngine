<template>
  
  <div class="Battlefield">
    Battlefield: [
    <Card
        v-for="card in battlefield"
        :card="card"
        :onMouseOver="onMouseOver"
        :onClick="onClickCard"
        v-on:mouseout.native="onMouseOut"
      />
    ]
  </div>
  
</template>

<script>
import Card from './Card'

export default {
  name: 'Battlefield',
  components: { Card },
  props: {
    battlefield: {
      type: Array,
      default: []
    },
    onClickCard: {
      type: Function,
      default: () => {}
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
.Battlefield {
  .Card {
    margin-left: 10px;
  }
}
</style>

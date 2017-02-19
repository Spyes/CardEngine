<template>
  
  <div class="Card" v-on:mouseover="mouseOver">
    {{ card.name }}
  </div>
  
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: {}
    },
    onMouseOver: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    mouseOver() {
      const { onMouseOver, card } = this
      onMouseOver(card)
    }
  }
}
</script>

<style lang="sass">
  .Card {
    cursor: pointer;
  }
</style>

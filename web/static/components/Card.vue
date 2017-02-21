<template>
  
  <div class="Card" v-on:mouseover="mouseOver" v-on:click="click">
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
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    mouseOver () {
      const { onMouseOver, card } = this
      onMouseOver(card)
    },
    click () {
      const { onClick, card } = this
      onClick(card)
    }
  }
}
</script>

<style lang="sass">
  .Card {
    cursor: pointer;
  }
</style>

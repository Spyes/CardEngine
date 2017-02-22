<template>

  <div class="Graveyard">
    Graveyard: {{ topCard.name }}
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Graveyard',
  components: { Card },
  props: {
    graveyard: {
      type: Array,
      default: []
    }
  },
  computed: {
    topCard () {
      return this.graveyard[this.graveyard.length - 1] || {}
    }
  }
}
</script>

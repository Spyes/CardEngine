<template>

  <div class="Graveyard">
    Graveyard
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
  }
}
</script>

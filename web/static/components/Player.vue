<template>
  
  <div class="Player">
    <div class="name">
      Player: {{ player.name }}
    </div>
    Hand: [
    <Hand :hand="player.hand" />
    ]
  </div>
  
</template>

<script>
import Hand from './Hand.vue'

export default {
  name: 'Player',
  components: { Hand },
  props: {
    player: {
      type: Object,
      default: {}
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

  

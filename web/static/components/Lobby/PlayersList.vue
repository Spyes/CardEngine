<template>

  <div class="PlayersList">
    <PlayerRow
        v-for="player in players"
        :player="player"
    />
  </div>
  
</template>

<script>
import PlayerRow from './PlayerRow.vue'
  
export default {
  name: 'PlayersList',
  components: { PlayerRow },
  props: {
    players: {
      type: Array,
      default: []
    }
  }
}    
</script>

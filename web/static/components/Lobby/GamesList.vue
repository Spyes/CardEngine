<template>

  <div class="GamesList">
    <h4>Games</h4>
    <div
        class="GameRow"
        v-for="game in games"
        v-on:click="onJoin(game)"
    >
      {{ game.name }}
    </div>
  </div>

</template>

<script>
export default {
  name: 'GamesList',
  props: {
    games: {
      type: Array,
      default: []
    }
  }
}
</script>

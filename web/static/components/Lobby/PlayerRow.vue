<template>

  <div class="PlayerRow">
    {{ player.name }}
  </div>

</template>

<script>
export default {
  name: 'PlayerRow',
  props: {
    player: {
      type: Object,
      default: {}
    }
  }
}
</script>

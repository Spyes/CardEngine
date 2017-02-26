<template>

  <div class="Login">
    <form
        v-on:submit="login"
    >
      <input
          type="text"
          v-model="username"
      />
      <input
          type="submit"
          value="Login"
      />
    </form>
  </div>
  
</template>

<script>
import commit from '../js/actions'
  
export default {
  name: 'Login',
  methods: {
    login (e) {
      e.preventDefault()
      commit({
        type: 'playerLogin',
        name: this.username
      })
      this.$store.commit({
        type: 'setView',
        view: 'lobby'
      })
    }
  }
}
</script>

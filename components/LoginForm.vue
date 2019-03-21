<template>
  <form>
    <div class="form-group">
      <label for="loginInput">Login</label>
      <input
        id="loginInput"
        v-model="username"
        type="text"
        class="form-control"
        aria-describedby="loginHelp"
        placeholder="Enter login">
      <small id="loginHelp" class="form-text text-muted">Your login name - {{username}}</small>
    </div>
    <div class="form-group">
      <label for="passwordInput">Password</label>
      <input
        id="passwordInput"
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password">
    </div>
    <button class="btn btn-primary" @click="login({username, password}, $event)">
      Let's go!
    </button>
    <button class="btn btn-primary" @click="routeToPanel($event)">
      Panel
    </button>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginForm',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  computed: mapState({
    user: state => state.user.data
  }),
  methods: {
    login(credentials, event) {
      event.preventDefault()
      this.$store.dispatch('user/login', credentials)
    },
    routeToPanel(event) {
      event.preventDefault()
      this.$router.push(`/panel`)
    }
  }
}
</script>

<style scoped>

</style>

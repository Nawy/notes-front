<template>
  <div class="container">
    <CreateUserForm v-if="false" />
    <LoginForm v-if="isAuthenticated === false" />
    <UserInfo v-if="isAuthenticated" />
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'
import CreateUserForm from '~/components/CreateUserForm.vue'
import UserInfo from '../components/UserInfo'
import { mapState } from 'vuex'

export default {
  components: {
    LoginForm,
    CreateUserForm,
    UserInfo
  },
  computed: mapState({
    isAuthenticated: state => state.authorisation.isAuthenticated
  }),
  middleware: 'authenticated'
}
</script>

<style>
</style>

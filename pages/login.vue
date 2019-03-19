<template>
  <div class="container">
    <CreateUserForm v-if="false" />
    <LoginForm v-if="isUserEmpty" />
    <UserInfo v-if="isUserEmpty === false" />
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
    isUserEmpty: state => state.authorisation.user == null
  }),
  middleware: 'authenticated'
}
</script>

<style>
</style>

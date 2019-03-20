<template>
  <div class="row">
    <h1>Hello <span v-if="user !== null">{{user.username}}!</span></h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserInfo',
  computed: mapState({
    user: state => state.authorisation.user
  })
}
</script>

<style scoped>

</style>

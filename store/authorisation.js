import querystring from 'querystring'

const state = function () {
  return {
    user: null,
    isAuthenticated: false
  }
}

const mutations = {
  authenticate(state, user) {
    state.user = user
    state.isAuthenticated = true
  },

  logout(state) {
    state.user = false
    state.isAuthenticated = false
  }
}

const getters = {}

const actions = {
  async login(store, credentials) {
    const authResponse = await this.$axios.post(
      '/api/login',
      querystring.stringify(credentials),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    console.info("Response: {}", authResponse) // eslint-disable-line
    if (authResponse.status === 200) {
      const userResponse = await this.$axios.get(
        `/api/users/${credentials.username}`
      )
      console.info("User: {}", userResponse.data) // eslint-disable-line
      store.commit('authenticate', userResponse.data)
    }
  }
}

export default {
  namaspaced: true,
  state,
  getters,
  actions,
  mutations
}

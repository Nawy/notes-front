import querystring from 'querystring'

const state = function () {
  return {
    data: null,
    isAuthenticated: false
  }
}

const mutations = {
  setUser(state, user) {
    state.data = user
  },
  authenticate(state, authState) {
    state.isAuthenticated = authState
  },
  logout(state) {
    state.data = false
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

    if (authResponse.status === 200) {
      store.commit('authenticate', true)
      const userResponse = await this.$axios.get(
        `/api/users/${credentials.username}`
      )
      store.commit('setUser', userResponse.data)
      credentials.callback()
    }
  },
  async loadUser(store) {
    const userResponse = await this.$axios.get(
      `/api/users`
    )
    store.commit('setUser', userResponse.data)
  }
}

export default {
  namaspaced: true,
  state,
  getters,
  actions,
  mutations
}

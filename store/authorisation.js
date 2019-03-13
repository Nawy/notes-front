const state = {
  user: null
}

const mutations = {
  login({ state }, user) {
    state.user = user;
  }
}

const getters = {}

const actions = {
  login({ commit, state }, credentials) {
    commit('login', null)
  }
}

export default {
  namaspaced: true,
  state,
  getters,
  actions,
  mutations
}

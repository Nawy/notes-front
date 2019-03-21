import axios from 'axios'

export default function ({ store, redirect }) {
  if (store.state.user.data === null) {
    return axios.get(
      `/api/users`
    ).then((response) => {
      store.commit('user/setUser', response.data)
    }).catch((response) => {
      return redirect('/login')
    })
  }
  return redirect('/login')
}

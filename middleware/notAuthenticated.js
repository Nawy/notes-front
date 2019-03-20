export default function ({ store, redirect }) {
  if (store.state.authorisation.isAuthenticated === false) {
    return redirect('/login')
  }
}

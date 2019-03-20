export default function ({ store, redirect }) {
  if (store.state.authorisation.isAuthenticated) {
    return redirect('/')
  }
}

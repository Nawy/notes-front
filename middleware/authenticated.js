export default function ({ store, redirect }) {
  if (store.state.authorisation.user !== null) {
    return redirect('/')
  }
}

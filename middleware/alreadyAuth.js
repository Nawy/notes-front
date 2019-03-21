export default function ({ store, redirect }) {
  if (store.state.user.data !== null) {
    return redirect('/panel')
  }
}

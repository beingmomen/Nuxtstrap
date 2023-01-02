export default function ({ redirect, $auth }) {
  if (!$auth.$state.loggedIn) {
    redirect('/login')
  }
}
